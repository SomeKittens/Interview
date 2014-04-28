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

module.exports = function fizzbuzz(e, s) {
  if (e !== 1) {
    console.error('Yield method only works when starting at one');
    process.exit(1);
  }
  for (var i = e; i < s; i++) {
    console.log((fizzGen.next().value + buzzGen.next().value) || i);
  }
};
