<?php

namespace CassidooChallenges;

define("__284__RANGE_FILL", "...");

/**
 * **You are given a list of positive integers which represents some range of integers which has been truncated. Find
 * the missing bits, insert ellipses to show that that part has been truncated, and print it.** If the consecutive
 * values differ by exactly two, then insert the missing value.
 *
 * @example -
 *  ```js
 * missingBits([1, 2, 3, 4, 20, 21, 22, 23]); // "[1,2,3,4,...,20,21,22,23]"
 * missingBits([1, 2, 3, 5, 6]); // "[1,2,3,4,5,6]"
 * missingBits([1, 3, 20, 27]); // "[1,2,3,...,20,...,27]"
 * ```
 *
 * @param int[] $bits Bits collection.
 * @param int $gap Difference between numbers to fill the gap.
 * @return string
 */
function missingBits(array $bits, int $gap = 2): string
{
    sort($bits);

    $result = implode(
        ', ',
        array_reduce(
            $bits,
            fn (array $acc, int $current) => reducer($acc, $current, $gap),
            []
        )
    );

    return "[{$result}]";
}

/**
 * Reducer.
 *
 * @param mixed[] $acc Accumulator.
 * @param int $current Current value.
 * @param int $gap Difference between numbers to fill the gap.
 * @return mixed[]
 */
function reducer(array $acc, int $current, int $gap): array
{
    if (count($acc) === 0) {
        return [...$acc, $current];
    }

    $prev = $acc[array_key_last($acc)];
    if ($current - $prev === 1) {
        return [...$acc, $current];
    }

    if ($current - $prev > $gap) {
        return [...$acc, __284__RANGE_FILL, $current];
    }

    return array_merge(
        $acc,
        array_map(
            fn (int $idx) => $current - $idx,
            range($gap - 1, 0)
        )
    );
}
