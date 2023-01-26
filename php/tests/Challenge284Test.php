<?php

namespace CassidooChallenges\Test;

use function CassidooChallenges\missingBits;

include_once __DIR__ . "/../challenges/284-the-best-prophet-of-the-future-is-the-past-lord/index.php";

it('test with single range of missing numbers', function () {
    $this->assertEquals("[1, 2, 3, 4, ..., 20, 21, 22, 23]", missingBits([1, 2, 3, 4, 20, 21, 22, 23]));
});

it('test with multiple range of missing numbers', function () {
    $this->assertEquals("[1, 2, 3, ..., 20, ..., 27]", missingBits([1, 3, 20, 27]));
});

it('test with single missing numbers', function () {
    $this->assertEquals("[1, 2, 3, 4, 5, 6]", missingBits([1, 2, 3, 5, 6]));
});

it('test with unordered array', function () {
    $this->assertEquals("[1, 2, 3, ..., 7]", missingBits([7, 1, 3, 2]));
});

it('test with negative numbers', function () {
    $this->assertEquals(
        "[-9, -8, -7, -6, -5, ..., 7, 8, 9, ..., 15, 16, 17]",
        missingBits([-9, -8, -6, -5, 7, 9, 15, 17])
    );
});

it('test with short array', function () {
    $this->assertEquals("[1, ..., 4]", missingBits([1, 4]));
});

it('test with single number', function () {
    $this->assertEquals("[4]", missingBits([4]));
});

it('test with single range of missing numbers changing the gap', function () {
    $this->assertEquals("[1, 2, 3, 4, 5, 6, ..., 10, 11]", missingBits([1, 2, 5, 6, 10, 11], 3));
});
