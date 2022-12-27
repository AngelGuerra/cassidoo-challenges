<?php

namespace CassidooChallenges;

use Exception;

function replaceZeros(string $str): string
{
    if (!preg_match("/^\d+$/", $str)) {
        throw new Exception("Input must contain only digits.");
    }

    return (string)preg_replace_callback(
        "/(0+)/",
        fn ($match) => (string)strlen($match[0]),
        $str
    );
}
