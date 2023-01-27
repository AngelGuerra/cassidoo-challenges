<?php

namespace CassidooChallenges\Test;

use function CassidooChallenges\sumEveryOther;

include_once __DIR__ . "/../challenges/282-what-you-do-every-day-matters-more-than-what-you/index.php";

it('test example 548915381 must be 26', function () {
    $this->assertEquals(26, sumEveryOther(548915381));
});

it('test example 10 must be 0', function () {
    $this->assertEquals(0, sumEveryOther(10));
});

it('test example 1010.11 must be 1', function () {
    $this->assertEquals(1, sumEveryOther(1010.11));
});

it('test example 98763.4604 must be 18', function () {
    $this->assertEquals(18, sumEveryOther(98763.4604));
});
