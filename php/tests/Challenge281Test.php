<?php

namespace CassidooChallenges\Test;

use Exception;

use function CassidooChallenges\maxSubarray;

include_once __DIR__ . "/../challenges/281-from-a-small-seed-a-mighty-trunk-may-grow/index.php";

it('test when length is greather than array length', function () {
    maxSubarray([1, 2, 3], 4);
})->throws(Exception::class);

it('test example ([-4, 2, -5, 1, 2, 3, 6, -5, 1], 4) must be [1, 2, 3, 6]', function () {
    $this->assertEquals([1, 2, 3, 6], maxSubarray([-4, 2, -5, 1, 2, 3, 6, -5, 1], 4));
});

it('test example [1, 2, 0, 5], 2 must be [0, 5]', function () {
    $this->assertEquals([0, 5], maxSubarray([1, 2, 0, 5], 2));
});
