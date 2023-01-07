<?php

namespace CassidooChallenges;

/**
 * Given a string, make every consonant after a vowel uppercase. Can you do this with and without regex?
 *
 * @example -
 * ```js
 * capitalAfterVowel("hello world"); // "heLlo WoRld"
 * capitalAfterVowel("xaabeuekadii"); // "xaaBeueKaDii"
 * ```
 */
class AfterVowelCapitalizer
{
    /**
     * Constructor.
     *
     * @param string $str String to transform.
     */
    public function __construct(private string $str)
    {
    }

    public function withRegex(): ?string
    {
        return preg_replace_callback(
            "/(?<=[aeiou])(!?\s?)([^aeiou]{1})/i",
            fn (array $match) => mb_strtoupper($match[0]),
            $this->str
        );
    }

    public function withoutRegex(): string
    {
        $uppercaseIt = false;

        return implode("", array_map(function (string $char) use (&$uppercaseIt) {
            if (ctype_space($char)) {
                return ' ';
            }

            if ($this->isVowel($char)) {
                $uppercaseIt = true;

                return $char;
            }

            if (!$uppercaseIt) {
                return $char;
            }

            $uppercaseIt = false;

            return mb_strtoupper($char);
        }, str_split($this->str)));
    }

    private function isVowel(string $char): bool
    {
        return in_array($char, ["a", "e", "i", "o", "u"]);
    }
}
