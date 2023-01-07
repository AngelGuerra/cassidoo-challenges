<?php

namespace CassidooChallenges;

use Exception;

# Write a function that takes in a number from 1 to 1000 and returns that number in Roman Numerals.

const BASE_VALUES = [
    "M" => 1000,
    "CM" => 900,
    "D" => 500,
    "CD" => 400,
    "C" => 100,
    "XC" => 90,
    "L" => 50,
    "XL" => 40,
    "X" => 10,
    "IX" => 9,
    "V" => 5,
    "IV" => 4,
    "I" => 1,
];


function generateRoman(int $number, string $result = ""): string
{
    if ($number === 0) {
        return $result;
    }

    [$currentKey, $currentValue] = ["", 0];

    foreach (BASE_VALUES as $baseKey => $baseValue) {
        if ($baseValue <= $number) {
            [$currentKey, $currentValue] = [$baseKey, $baseValue];

            break;
        }
    }

    return generateRoman($number - $currentValue, "{$result}{$currentKey}");
}

function integerToRoman(int $number): string
{
    if ($number <= 0 || $number >= 4000) {
        throw new Exception("The number must be between 0 and 3,999.", 1);
    }

    return generateRoman($number);
}
