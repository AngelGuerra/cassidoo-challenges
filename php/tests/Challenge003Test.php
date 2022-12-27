<?php

namespace CassidooChallenges\Test;

use function CassidooChallenges\areAnagrams;

include_once __DIR__ . "/../challenges/003-sometimes-im-so-sweet-even-i-cant-stand-it-julie/index.php";

it("test 'O, Draconian devil!' and 'Leonardo Da Vinci' must be true", function () {
    $this->assertTrue(areAnagrams('O, Draconian devil!', 'Leonardo Da Vinci'));
});

it("test 'Oh, lame saint!' and 'The Mona Lisa' must be true", function () {
    $this->assertTrue(areAnagrams('Oh, lame saint!', 'The Mona Lisa'));
});

it("test 'So dark the con of Man' and 'Madonna of the Rocks' must be true", function () {
    $this->assertTrue(areAnagrams('So dark the con of Man', 'Madonna of the Rocks'));
});

it("test 'Tom Marvolo Riddle' and 'I am Lord Voldemort' must be true", function () {
    $this->assertTrue(areAnagrams('Tom Marvolo Riddle', 'I am Lord Voldemort'));
});

it("test 'nope' and 'yeah' must be false", function () {
    $this->assertFalse(areAnagrams('nope', 'yeah'));
});

it("test 'Punishments' and 'Nine thumps' must be false", function () {
    $this->assertFalse(areAnagrams('Punishments', 'Nine thumps'));
});
