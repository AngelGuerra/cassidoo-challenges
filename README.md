# Challenge accepted

Collection of challenges sent by [Cassidy Williams](https://cassidoo.co/) in her newsletter "Rendezvous with cassidoo".

![Challenge accepted meme](./challenge-accepted.svg)

Haven't you subscribed yet? -> https://cassidoo.co/newsletter/

## 1 challenge -> N langs

**Any suggestion, doubt or change is more than welcome.**

**As version manager I use [asdf](https://asdf-vm.com/).**

### Typescript

It's the main directory as it contains the READMEs with the challenges as well as the solution to them. For the tests [vitest](https://vitest.dev/) is used.

To run the tests:

`npm run vitest`

### PHP

For PHP tests, the [Pest](https://pestphp.com/) library is used, these tests are located inside the `tests` folder. Also [PHPStan](https://phpstan.org/) and [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) are used to ensure the quality of the code.

To run the tests:

`composer test`

### Ruby

[Rubocop](https://github.com/rubocop/rubocop) is used for code quality assurance and [RSpec](http://rspec.info/) as a testing library.

To run the tests:

`rake test`
