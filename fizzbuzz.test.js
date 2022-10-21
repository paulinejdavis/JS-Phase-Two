const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {

    it('returns Fizzbuzz if divisble by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

    it('returns Fizz if divisble by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    });

    it('returns Buzz if divisble by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    });

    it('returns 8 if divisble by 8', () => {
        expect(fizzBuzz(8)).toBe(8);
    });

});