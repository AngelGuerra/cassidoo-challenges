<?php

namespace CassidooChallenges;

use Exception;
use Generator;

/**
 * Based on https://apidock.com/ruby/Enumerable/each_cons
 * It iterates the given block for each array of consecutive <n> elements.
 *
 * @param int[] $arr Array to iterate.
 * @param int $length Length of each block.
 * @return \Generator
 */
function eachCons(array $arr, int $length): Generator
{
    for ($idx = 0; $idx <= count($arr) - $length; $idx++) {
        yield array_slice($arr, $idx, $length);
    }
}

/**
 * Given an array of integers arr and an integer n, return a subarray of arr of length n where the sum is the largest.
 * Make sure you maintain the order of the original array, and if n is greater than arr.length, you can choose what
 * you want to return.
 *
 * @example -
 * ```js
 * maxSubarray([-4, 2, -5, 1, 2, 3, 6, -5, 1], 4); // [1,2,3,6]
 * maxSubarray([1, 2, 0, 5], 2); // [0,5]
 * ```
 *
 * @param int[] $arr Array to iterate.
 * @param int $length Length of each block.
 * @return int[]
 */
function maxSubarray(array $arr, int $length): array
{
    if ($length > count($arr)) {
        throw new Exception("The given length exceeds the length of the array.");
    }

    /** @var array{int[], int|null} $result */
    $result = [[], null];
    $generator = eachCons($arr, $length);

    /** @var int[] $block */
    foreach ($generator as $block) {
        $packSum = array_reduce(
            $block,
            fn (int $sum, int $current) => $sum + $current,
            0
        );

        if (is_null($result[1])) {
            $result = [$block, $packSum];
        }

        if ($packSum <= $result[1]) {
            continue;
        }

        $result = [$block, $packSum];
    }

    return $result[0];
}
