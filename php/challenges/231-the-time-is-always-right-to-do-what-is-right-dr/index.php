<?php

namespace CassidooChallenges;

use Exception;

class Wordle
{
    public function __construct(private string $solution)
    {
        if (strlen($solution) !== 5 || !ctype_alpha($solution)) {
            throw new Exception("Solution must be a valid 5-letter word.");
        }
    }

    public function guess(string $input): string
    {
        if (strlen($input) !== 5) {
            throw new Exception("Input must be a valid 5-letter word.");
        }

        if ($this->solution === $input) {
            return "🟩🟩🟩🟩🟩";
        }

        $cleanedWord = $this->solution;


        // I don't use arrow functions because the values passed to it, in this case `$cleanWord`, are passed by value
        // and not by reference.
        // fn (string $char, int $idx) => $this->findCoincidences($char, $idx, $cleanedWord),
        return array_reduce(
            array_map(
                function (string $char, int $idx) use (&$cleanedWord) {
                    return $this->findCoincidences($char, $idx, $cleanedWord);
                },
                str_split($input),
                range(0, 4)
            ),
            function (string $result, string $char) use (&$cleanedWord) {
                return $this->checkPartialCoincidences($result, $char, $cleanedWord);
            },
            ""
        );
    }

    /**
     * Searches if a character matches in the same position as the solution.
     *
     * @param string $char Current char in the word.
     * @param integer $idx Index of the char inside the word.
     * @param string $solution Cleaned solution.
     * @return string `🟩` if coincidence exists, `$char` otherwise.
     */
    private function findCoincidences(string $char, int $idx, string &$solution): string
    {
        if ($solution[$idx] === $char) {
            $solution[$idx] = ' ';

            return "🟩";
        }

        return $char;
    }

    /**
     * Searches if a character matches in a different position than in the solution.
     *
     * @param string $result Final result.
     * @param string $char Current char in the word.
     * @param string $solution Cleaned solution.
     * @return string The final result concatenated with the matching result.
     */
    private function checkPartialCoincidences(string $result, string $char, string &$solution): string
    {
        if ($char === "🟩") {
            return "{$result}{$char}";
        }

        if (str_contains($solution, $char)) {
            $solution[(int)strpos($solution, $char)] = ' ';

            return "{$result}🟨";
        }

        return "{$result}⬛";
    }
}
