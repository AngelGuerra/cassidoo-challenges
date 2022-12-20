<?php

namespace CassidooChallenges\Test;

include_once __DIR__ . "/../challenges/279-dont-be-afraid-of-hard-work-nothing-worthwhile/index.php";

use CassidooChallenges\AfterVowelCapitalizer;

it('test with regex example 01', function () {
    $capitalizer = new AfterVowelCapitalizer("hello world");
    $this->assertEquals($capitalizer->withRegex(), 'heLlo WoRld');
});

it('test with regex example 02', function () {
    $capitalizer = new AfterVowelCapitalizer("xaabeuekadii");
    $this->assertEquals($capitalizer->withRegex(), 'xaaBeueKaDii');
});

it('test without regex example 01', function () {
    $capitalizer = new AfterVowelCapitalizer("hello world");
    $this->assertEquals($capitalizer->withoutRegex(), 'heLlo WoRld');
});

it('test without regex example 02', function () {
    $capitalizer = new AfterVowelCapitalizer("xaabeuekadii");
    $this->assertEquals($capitalizer->withoutRegex(), 'xaaBeueKaDii');
});
