<?php

namespace CassidooChallenges\Test;

use function CassidooChallenges\generateRoman;

include_once __DIR__ . "/../challenges/001-sometimes-i-get-emotional-over-fonts-kanye-west/index.php";

it('when convert 3,999 to roman must be MMMCMXCIX', function () {
    $this->assertEquals('MMMCMXCIX', generateRoman(3999));
});

it('when convert 1,904 to roman must be MCMIV', function () {
    $this->assertEquals('MCMIV', generateRoman(1904));
});

it('when convert 1 to roman must be I', function () {
    $this->assertEquals('I', generateRoman(1));
});

it('when convert 3,549 to roman must be MMMDXLIX', function () {
    $this->assertEquals('MMMDXLIX', generateRoman(3549));
});

it('when convert 789 to roman must be DCCLXXXIX', function () {
    $this->assertEquals('DCCLXXXIX', generateRoman(789));
});
