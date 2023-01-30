<?php

namespace CassidooChallenges;

use Exception;

/**
 * Given a positive integer, generate an array in which every element is an array that goes from 1 to the index of
 * that array.
 *
 * @example -
 *  ```js
 * generateArrays(4); // [[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]]
 * generateArrays(1); // [[1]]
 * ```
 *
 * @param int $length New array length.
 * @return int[][]
 */
function generateArrays(int $length): array
{
    if ($length <= 0) {
        throw new Exception("Length must be a positive number.");
    }

    return array_map(
        fn (int $innerLength) => range(1, $innerLength),
        range(1, $length)
    );
}
