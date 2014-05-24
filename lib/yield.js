'use strict';

/* jshint esnext: true */

// In separate file to avoid syntax errors in older versions of node
// Currently only works when starting at one.

var isPrime = require('./prime');

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

var fizzGen, buzzGen;

var reset = function() {
  fizzGen = fizz();
  buzzGen = buzz();
};

module.exports = function fizzbuzz(config, out) {
  reset();
  if (config.s - 1 % 3 !== 0) {
    console.error('Yield method only works with numbers in the sequence 1, 4, 7...');
    process.exit(1);
  }
  for (var i = config.s; i <= config.e; i++) {
    var outStr = '';
    outStr += (fizzGen.next().value + buzzGen.next().value);
    if (config.p && isPrime(i)) {
      if (!outStr) {
        outStr = 'Prime';
      } else {
        outStr += ' Prime';
      }
    }
    if (!outStr) {
      outStr = i;
    }
    out(outStr);
  }
};
