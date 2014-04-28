'use strict';

/**
 * Runs through FizzBuzz for n integers using an iterative method
 * Output is sent to the console
 * @param  {integer} s The number to start at
 * @param  {integer} e The number to end at
 */

module.exports = function(s, e) {
  for (var i = s; i <= e; i++) {
    console.log(i);
    if (!(i % 15)) {
      console.log('FizzBuzz');
      continue;
    } else if (!(i % 3)) {
      console.log('Fizz');
      continue;
    } else if (!(i % 5)) {
      console.log('Buzz');
      continue;
    }
    console.log(i);
  }
};