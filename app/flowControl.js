exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function(num) {
      if(typeof num !== typeof 3) {
          return false;
      }
      var fizzbuzz = '';
      if(num % 3 === 0) {
        fizzbuzz += 'fizz';
      }
      if(num % 5 === 0) {
        fizzbuzz += 'buzz';
      }
      if(fizzbuzz.length === 0) {
        return num;
      }
      else {
        return fizzbuzz;
      }
    }
};
