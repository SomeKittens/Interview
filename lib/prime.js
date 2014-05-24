'use strict';

var findPrime = function(num) {
  if (num < 4) {
    return true;
  }
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = findPrime;