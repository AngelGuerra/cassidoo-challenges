<?php

namespace CassidooChallenges\Test;

use Exception;

use function CassidooChallenges\replaceZeros;

include_once __DIR__ . "/../challenges/280-love-is-all-we-have-the-only-way-that-each-can/index.php";

it('throws exception when input is empty', function () {
    replaceZeros("");
})->throws(Exception::class);

it("throws exception when input doesn't contain only numbers", function () {
    replaceZeros("angel00123456");
})->throws(Exception::class);

it('test example "1234500362000440"', function () {
    $this->assertEquals(1234523623441, replaceZeros("1234500362000440"));
});

it('test example "123450036200044"', function () {
    $this->assertEquals(123452362344, replaceZeros("123450036200044"));
});

it('test example "000000000000"', function () {
    $this->assertEquals(12, replaceZeros("000000000000"));
});

it('test example "123456789"', function () {
    $this->assertEquals(123456789, replaceZeros("123456789"));
});
