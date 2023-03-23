import { expect, describe, it } from "vitest";
import { convertColor, HEX, HSL, RGB } from ".";

// Talk is cheap, show me the code
describe.concurrent("Checks conversions from a HEX color", () => {
  it("checks the color validation by its length", async () => {
    expect(() => convertColor(HEX, RGB, "#1234567")).toThrowError(
      "Invalid hex color."
    );
  });

  it("checks the validation of the color format", async () => {
    expect(() => convertColor(HEX, RGB, "#89j342")).toThrowError(
      "Invalid hex color."
    );
  });

  it("checks converstion to same format", async () => {
    expect(convertColor(HEX, HEX, "#a7D")).toBe("#a7D");
  });

  it("checks a random color with a length of 4 to RGB", async () => {
    expect(convertColor(HEX, RGB, "#a7D")).toBe("(170,119,221)");
  });

  it("checks a random color with a length of 7 to RGB", async () => {
    expect(convertColor(HEX, RGB, "#123456")).toBe("(18,52,86)");
  });

  it("checks a random color with a length of 4 to HSL", async () => {
    expect(convertColor(HEX, HSL, "#a7D")).toBe("(270,60,67)");
  });

  it("checks a random color with a length of 7 to HSL", async () => {
    expect(convertColor(HEX, HSL, "#123456")).toBe("(210,65,20)");
  });
});

describe.concurrent("Checks conversions from a RGB color", () => {
  it("checks the validation of the color format", async () => {
    expect(() => convertColor(RGB, HEX, "(1111,32,45)")).toThrowError(
      "Invalid rgb color."
    );
  });

  it("checks the validation of the color format with wrong red", async () => {
    expect(() => convertColor(RGB, HEX, "(430,32,45)")).toThrowError(
      "Invalid rgb color."
    );
  });

  it("checks the validation of the color format with wrong green", async () => {
    expect(() => convertColor(RGB, HEX, "(30,432,45)")).toThrowError(
      "Invalid rgb color."
    );
  });

  it("checks the validation of the color format with wrong blue", async () => {
    expect(() => convertColor(RGB, HEX, "(30,32,745)")).toThrowError(
      "Invalid rgb color."
    );
  });

  it("checks a random color to HEX", async () => {
    expect(convertColor(RGB, HEX, "(170,119,221)")).toBe("#aa77dd");
  });

  it("checks a random color to HSL when the red is the highest and green is the lowest", async () => {
    expect(convertColor(RGB, HSL, "(200,52,86)")).toBe("(346,59,49)");
  });

  it("checks a random color to HSL when the red is the highest and blue is the lowest", async () => {
    expect(convertColor(RGB, HSL, "(200,52,8)")).toBe("(14,92,41)");
  });

  it("checks a random color to HSL when the green is the highest", async () => {
    expect(convertColor(RGB, HSL, "(18,150,86)")).toBe("(151,79,33)");
  });

  it("checks a random color to HSL when the blue is the higher", async () => {
    expect(convertColor(RGB, HSL, "(18,52,86)")).toBe("(210,65,20)");
  });

  it("checks achromatic color to HSL", async () => {
    expect(convertColor(RGB, HSL, "(51,51,51)")).toBe("(0,0,20)");
  });
});

describe.concurrent("Checks conversions from a HSL color", () => {
  it("checks the validation of the color format", async () => {
    expect(() => convertColor(HSL, HEX, "(4000,50,0)")).toThrowError(
      "Invalid hsl color."
    );
  });

  it("checks the validation of the color format with wrong hue", async () => {
    expect(() => convertColor(HSL, HEX, "(720,50,0)")).toThrowError(
      "Invalid hsl color."
    );
  });

  it("checks the validation of the color format with wrong saturation", async () => {
    expect(() => convertColor(HSL, HEX, "(20,190,0)")).toThrowError(
      "Invalid hsl color."
    );
  });

  it("checks the validation of the color format with wrong light", async () => {
    expect(() => convertColor(HSL, HEX, "(20,50,200)")).toThrowError(
      "Invalid hsl color."
    );
  });

  it("checks a random color to HEX", async () => {
    expect(convertColor(HSL, HEX, "(145,90,20)")).toBe("#05612b");
  });

  it("checks a random color to RGB", async () => {
    expect(convertColor(HSL, RGB, "(145,90,20)")).toBe("(5,97,43)");
  });

  it("checks a random color without saturation to RGB", async () => {
    expect(convertColor(HSL, RGB, "(145,0,20)")).toBe("(51,51,51)");
  });

  it("checks a random color to RGB with very low saturation", async () => {
    expect(convertColor(HSL, RGB, "(2,90,20)")).toBe("(97,8,5)");
  });

  it("checks a random color to RGB with very hight", async () => {
    expect(convertColor(HSL, RGB, "(359,90,20)")).toBe("(97,5,7)");
  });

  it("checks a random color to RGB with light > 50%", async () => {
    expect(convertColor(HSL, RGB, "(359,90,90)")).toBe("(252,207,207)");
  });
});
