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

fizzBuzz(100);