<?php

namespace CassidooChallenges\Test;

use CassidooChallenges\Wordle;

include_once __DIR__ . "/../challenges/231-the-time-is-always-right-to-do-what-is-right-dr/index.php";

$wordleFudge = new Wordle("fudge");

it('test word "reads" with solution "fudge"', function () use ($wordleFudge) {
    $this->assertEquals('⬛🟨⬛🟨⬛', $wordleFudge->guess('reads'));
});

it('test word "deeds" with solution "fudge"', function () use ($wordleFudge) {
    $this->assertEquals('🟨🟨⬛⬛⬛', $wordleFudge->guess('deeds'));
});

it('test word "lodge" with solution "fudge"', function () use ($wordleFudge) {
    $this->assertEquals('⬛⬛🟩🟩🟩', $wordleFudge->guess('lodge'));
});

it('test 100% coincidence', function () use ($wordleFudge) {
    $this->assertEquals('🟩🟩🟩🟩🟩', $wordleFudge->guess('fudge'));
});

$wordlePerps = new Wordle("perps");

it('test word "poppy" with solution "perps"', function () use ($wordlePerps) {
    $this->assertEquals('🟩⬛⬛🟩⬛', $wordlePerps->guess('poppy'));
});

it('test word "eaeee" with solution "perps"', function () use ($wordlePerps) {
    $this->assertEquals('🟨⬛⬛⬛⬛', $wordlePerps->guess('eaeee'));
});

it('test word "erpsp" with solution "perps"', function () use ($wordlePerps) {
    $this->assertEquals('🟨🟨🟨🟨🟨', $wordlePerps->guess('erpsp'));
});
