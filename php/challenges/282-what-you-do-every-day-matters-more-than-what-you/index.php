<?php

namespace CassidooChallenges;

/**
 * Given a number, sum every second digit in that number.
 *
 * @example -
 *  ```js
 * sumEveryOther(548915381); // 26 -> 4+9+5+8
 * sumEveryOther(10); // 0
 * sumEveryOther(1010.11); // 1 -> 0+0+1
 * ```
 *
 * @param int|float $number
 * @return integer
 */
function sumEveryOther(int|float $number): int
{
    preg_match_all(
        "/\d(\d)/",
        (string)preg_replace("/\D/", "", (string)$number),
        $numbers
    );

    return array_sum(array_map(
        fn (string $n) => (int) $n,
        $numbers[1]
    ));
}
