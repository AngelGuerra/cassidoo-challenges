<?php

namespace CassidooChallenges;

# Write a function that takes in two strings and returns true if they are anagrams.

function cleanStringAndCastToArray(string $str): string
{
    return (string)preg_replace('/[^a-z]/', '', mb_strtolower($str));
}

function areAnagrams(string $strA, string $strB): bool
{
    return count_chars(cleanStringAndCastToArray($strA), 1) === count_chars(cleanStringAndCastToArray($strB), 1);
}
