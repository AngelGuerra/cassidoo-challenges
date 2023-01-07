<?php

namespace CassidooChallenges;

use Exception;

/**
 * Given a string of any length which contains only digits from 0 to 9, replace each consecutive run of the digit 0
 * with its length.
 *
 * @example -
 *  ```js
 * replaceZeros("1234500362000440");
 * // 1234523623441
 * replaceZeros("123450036200044");
 * // 123452362344
 * replaceZeros("000000000000");
 * // 12
 * replaceZeros("123456789");
 * // 123456789
 * ```
 *
 * @param string $str
 * @return integer
 */
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
