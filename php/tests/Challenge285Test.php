<?php

namespace CassidooChallenges\Test;

use Exception;

use function CassidooChallenges\generateArrays;

include_once __DIR__ . "/../challenges/285-if-you-want-to-feel-good-you-have-to-go-out-and/index.php";

it('test with non positive length must thrown an error', function () {
    generateArrays(0);
})->throws(Exception::class);

it('test with array length = 4', function () {
    $this->assertEquals([[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]], generateArrays(4));
});

it('test with array length = 1', function () {
    $this->assertEquals([[1]], generateArrays(1));
});
