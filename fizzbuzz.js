const fizzBuzz = (number) => {
    //if number is positive return positive
    //if number is negative return negative
    //if zero return zero

    if (number % 15 == 0) {
        // console.log('FizzBuzz');
        return 'FizzBuzz';
    } else if (number % 3 ==  0) {
        // console.log('Fizz');
        return 'Fizz';
    } else if (number % 5 ==  0) {
        // console.log('Buzz');
        return 'Buzz';
    } else {
        // console.log(number);
        return number;
    }
}

module.exports = fizzBuzz;

//works but not in speechmarks

