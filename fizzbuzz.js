'use strict';

var buzzToFizz = 100
  , arg = Number(process.argv[2]);

if (arg) {
  if(!isNaN(arg)) {
    buzzToFizz = arg;
  } else {
    console.error('Invalid arguments, expected number');
    process.exit();
  }
}

var fizzBuzz = function(n) {
  for (var i = 1; i < n; i++) {
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

fizzBuzz(buzzToFizz);