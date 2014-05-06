if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(n) {
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided or the value provided is not a number
      
      if (typeof n === 'number') {
        if (n % 3 === 0 && n % 5 === 0) {
          return 'fizzbuzz';
        } else if (n % 3 === 0) {
          return 'fizz';
        } else if (n % 5 === 0) {
          return 'buzz';
        } else {
          return n;
        }
      } else {
        return false;
      }

  
    }
  };
});
