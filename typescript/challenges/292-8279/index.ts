export const RGB = "rgb";
export const HEX = "hex";
export const HSL = "hsl";

type TColorFormat = "rgb" | "hex" | "hsl";
type THex = `#${string}`;
type TRgb = `(${number},${number},${number})`;
type THsl = `(${number},${number},${number})`;

interface TRgbObject {
  r: number;
  g: number;
  b: number;
}
interface THslObject {
  h: number;
  s: number;
  l: number;
}

function throwError(message: string): never {
  throw new Error(message);
}

/* *** */
/* HEX */
/* *** */

function validateHex(value: string): THex {
  if (![4, 7].includes(value.length)) throwError("Invalid hex color.");
  if (!/^#([\da-f]{3}){1,2}$/i.test(value)) throwError("Invalid hex color.");

  if (value.length === 4) {
    value = `#${value[1]}${value[1]}${value[2]}${value[2]}${value[3]}${value[3]}`;
  }

  return value as THex;
}

function hexToRgb(color: THex): TRgb {
  return rgbObjectToString({
    r: +`0x${color[1]}${color[2]}`,
    g: +`0x${color[3]}${color[4]}`,
    b: +`0x${color[5]}${color[6]}`,
  });
}

function hexToHsl(color: THex): THsl {
  return rgbToHsl(getRgbElements(hexToRgb(color)));
}

/* *** */
/* RGB */
/* *** */

function rgbObjectToString(rgb: TRgbObject): TRgb {
  return `(${rgb.r},${rgb.g},${rgb.b})`;
}

function getRgbElements(color: string): TRgbObject {
  const colors: { [key: string]: string } | undefined = color
    .replace(" ", "")
    .match(/\((?<red>\d{1,3}),(?<green>\d{1,3}),(?<blue>\d{1,3})\)/)?.groups;

  if (colors === undefined) throwError("Invalid rgb color.");

  const rgb = { r: +colors.red, g: +colors.green, b: +colors.blue };

  validateRgbElements(rgb);

  return rgb;
}

function validateRgbElements(rgb: TRgbObject): never | void {
  if (rgb.r < 0 || rgb.r > 255) throwError("Invalid rgb color.");
  if (rgb.g < 0 || rgb.g > 255) throwError("Invalid rgb color.");
  if (rgb.b < 0 || rgb.b > 255) throwError("Invalid rgb color.");
}

function getHue(
  delta: number,
  max: number,
  r: number,
  g: number,
  b: number
): number {
  if (delta === 0) return 0;

  let hue = 0;
  switch (max) {
    case r:
      hue = (g - b) / delta + (g < b ? 6 : 0);
      break;
    case g:
      hue = (b - r) / delta + 2;
      break;
    case b:
      hue = (r - g) / delta + 4;
      break;
  }

  return hue / 6;
}

function getLight(max: number, min: number): number {
  return (max + min) / 2;
}

function getSaturation(delta: number, light: number, max: number, min: number) {
  if (delta === 0) return 0;

  return light > 0.5 ? delta / (2 - max - min) : delta / (max + min);
}

function rgbToHex(color: TRgbObject): THex {
  return Object.values(color).reduce(
    (acc, element) => acc + (+element).toString(16).padStart(2, "0"),
    "#"
  ) as THex;
}

function rgbToHsl(color: TRgbObject): THsl {
  const r = color.r / 255;
  const g = color.g / 255;
  const b = color.b / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  const hue = getHue(delta, max, r, g, b);
  const light = getLight(max, min);
  const saturation = getSaturation(delta, light, max, min);

  return hslObjectToString({
    h: Math.round(hue * 360),
    s: Math.round(saturation * 100),
    l: Math.round(light * 100),
  });
}

/* *** */
/* HSL */
/* *** */

function hslObjectToString(hsl: THslObject): THsl {
  return `(${hsl.h},${hsl.s},${hsl.l})`;
}

function getHslElements(color: string): THslObject {
  const parts: { [key: string]: string } | undefined = color
    .replace(" ", "")
    .match(
      /\((?<hue>\d{1,3}),(?<saturation>\d{1,3}),(?<light>\d{1,3})\)/
    )?.groups;

  if (parts === undefined) throwError("Invalid hsl color.");

  const hsl = { h: +parts.hue, s: +parts.saturation, l: +parts.light };

  validateHslElements(hsl);

  return hsl;
}

function validateHslElements(hsl: THslObject): never | void {
  if (hsl.h < 0 || hsl.h > 360) throwError("Invalid hsl color.");
  if (hsl.s < 0 || hsl.s > 100) throwError("Invalid hsl color.");
  if (hsl.l < 0 || hsl.l > 100) throwError("Invalid hsl color.");
}

function hueToRgb(p: number, q: number, t: number) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToHex(color: THslObject): THex {
  return convertRgb(HEX, hslToRgb(color)) as THex;
}

function hslToRgb(color: THslObject): TRgb {
  const hue = color.h / 360;
  const saturation = color.s / 100;
  const light = color.l / 100;

  if (color.s === 0) {
    return rgbObjectToString({
      r: Math.round(light * 255),
      g: Math.round(light * 255),
      b: Math.round(light * 255),
    });
  }

  const secondary =
    light < 0.5
      ? light * (1 + saturation)
      : light + saturation - light * saturation;
  const primary = 2 * light - secondary;

  return rgbObjectToString({
    r: Math.round(hueToRgb(primary, secondary, hue + 1 / 3) * 255),
    g: Math.round(hueToRgb(primary, secondary, hue) * 255),
    b: Math.round(hueToRgb(primary, secondary, hue - 1 / 3) * 255),
  });
}

/* ********** */
/* CONVERTERS */
/* ********** */

function convertHex(
  to: Omit<TColorFormat, "hex">,
  value: THex | TRgb | THsl
): TRgb | THsl {
  const color: THex = validateHex(value);
  return to === RGB ? hexToRgb(color) : hexToHsl(color);
}

function convertRgb(
  to: Omit<TColorFormat, "rgb">,
  value: THex | TRgb | THsl
): THex | THsl {
  const color: TRgbObject = getRgbElements(value);
  return to === HEX ? rgbToHex(color) : rgbToHsl(color);
}

function convertHsl(
  to: Omit<TColorFormat, "hsl">,
  value: THex | TRgb | THsl
): THex | TRgb {
  const color: THslObject = getHslElements(value);
  return to === HEX ? hslToHex(color) : hslToRgb(color);
}

export function convertColor(
  from: TColorFormat,
  to: TColorFormat,
  value: THex | TRgb | THsl
): string {
  if (from === to) {
    return value;
  }

  switch (from) {
    case HEX:
      return convertHex(to, value);
    case RGB:
      return convertRgb(to, value);
    case HSL:
    default:
      return convertHsl(to, value);
  }
}
