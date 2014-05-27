'use strict';

var findPrime = function(num) {
  if (num < 4) {
    return true;
  }
  // http://math.stackexchange.com/a/5281
  var max = Math.ceil(Math.sqrt(num));
  for (var i = 2; i <= max; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = findPrime;