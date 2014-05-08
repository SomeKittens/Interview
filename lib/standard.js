'use strict';

/**
 * Runs through FizzBuzz for n integers using an iterative method
 * Output is sent to the console
 * @param  {integer} s The number to start at
 * @param  {integer} e The number to end at
 */

module.exports = function(s, e, out) {
  for (var i = s; i <= e; i++) {
    // Using extra if statement
    // http://jsperf.com/if-vs-concat
    // Slight increase in speed
    if (!(i % 15)) {
      out('FizzBuzz');
      continue;
    } else if (!(i % 3)) {
      out('Fizz');
      continue;
    } else if (!(i % 5)) {
      out('Buzz');
      continue;
    }
    out(i);
  }
};