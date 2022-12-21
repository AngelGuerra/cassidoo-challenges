<?php

namespace CassidooChallenges\Test;

include_once __DIR__ . "/../challenges/279-dont-be-afraid-of-hard-work-nothing-worthwhile/index.php";

use CassidooChallenges\AfterVowelCapitalizer;

it('test with regex example "hello world"', function () {
    $capitalizer = new AfterVowelCapitalizer("hello world");
    $this->assertEquals($capitalizer->withRegex(), 'heLlo WoRld');
});

it('test with regex example "xaabeuekadii"', function () {
    $capitalizer = new AfterVowelCapitalizer("xaabeuekadii");
    $this->assertEquals($capitalizer->withRegex(), 'xaaBeueKaDii');
});

it('test without regex example "hello world"', function () {
    $capitalizer = new AfterVowelCapitalizer("hello world");
    $this->assertEquals($capitalizer->withoutRegex(), 'heLlo WoRld');
});

it('test without regex example "xaabeuekadii"', function () {
    $capitalizer = new AfterVowelCapitalizer("xaabeuekadii");
    $this->assertEquals($capitalizer->withoutRegex(), 'xaaBeueKaDii');
});
