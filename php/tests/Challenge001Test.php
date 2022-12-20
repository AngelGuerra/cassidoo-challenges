<?php

namespace CassidooChallenges\Test;

use function CassidooChallenges\generateRoman;

include_once __DIR__ . "/../challenges/001-sometimes-i-get-emotional-over-fonts-kanye-west/index.php";

// use CassidooChallenges\AfterVowelCapitalizer;

it('when convert 3,999 to roman must be MMMCMXCIX', function () {
    $this->assertEquals(generateRoman(3999), 'MMMCMXCIX');
});

it('when convert 1,904 to roman must be MCMIV', function () {
    $this->assertEquals(generateRoman(1904), 'MCMIV');
});

it('when convert 1 to roman must be I', function () {
    $this->assertEquals(generateRoman(1), 'I');
});

it('when convert 3,549 to roman must be MMMDXLIX', function () {
    $this->assertEquals(generateRoman(3549), 'MMMDXLIX');
});

it('when convert 789 to roman must be DCCLXXXIX', function () {
    $this->assertEquals(generateRoman(789), 'DCCLXXXIX');
});
