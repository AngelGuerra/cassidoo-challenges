<?php

namespace CassidooChallenges;

use Exception;

function replaceZeros(string $str): int
{
    if (!preg_match("/^\d+$/", $str)) {
        throw new Exception("Input must contain only digits.");
    }

    return (int)preg_replace_callback(
        "/(0+)/",
        fn ($match) => (string)strlen($match[0]),
        $str
    );
}
