'use strict';

/**
 * Runs through FizzBuzz for n integers using an iterative method
 * Output is sent to the console
 * @param  {integer} s The number to start at
 * @param  {integer} e The number to end at
 */

var isPrime = require('./prime');

module.exports = function(config, out) {

  for (var i = config.s; i <= config.e; i++) {
    var prime = '';
    if (config.p && isPrime(i)) {
      prime = ' Prime';
    }
    // There are no FizzBuzz primes
    if (!(i % 15)) {
      out('FizzBuzz');
      continue;
    } else if (!(i % 3)) {
      out('Fizz' + prime);
      continue;
    } else if (!(i % 5)) {
      out('Buzz' + prime);
      continue;
    }
    out(prime.trim() || i);
  }
};