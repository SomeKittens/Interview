'use strict';

// In separate file to avoid syntax errors in older versions of node
// Currently only works when starting at one.

var fizz = function *() {
  while(true) {
    yield '';
    yield '';
    yield 'Fizz';
  }
};

var buzz = function *() {
  while (true) {
    yield '';
    yield '';
    yield '';
    yield '';
    yield 'Buzz';
  }
};

var fizzGen = fizz()
  , buzzGen = buzz();

module.exports = function fizzbuzz(e, s, out) {
  if (e - 1 % 3 !== 0) {
    console.error('Yield method only works with numbers in the sequence 1, 4, 7...');
    process.exit(1);
  }
  for (var i = e; i < s; i++) {
    out((fizzGen.next().value + buzzGen.next().value) || i);
  }
};
