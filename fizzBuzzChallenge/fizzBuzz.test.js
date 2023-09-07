const fizzBuzz = require('./fizzBuzz');
// fizzBuzz is a newly created constant variable to contain the imported file
// the item inside the brackets called after require is the file name

describe('fizzBuzz', () => {
    it('if num % 15 === 0, then it returns "FizzBuzz"', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    })

    it('if num % 5 === 0, then it returns "Buzz"', () => {
        expect(fizzBuzz(5)).toBe('Buzz')
    })

    it('if num % 3 === 0, then it returns "Fizz"', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
    })

    it('if num is not % === 0, then it returns "FizzBuzz"', () => {
        expect(fizzBuzz(8)).toBe(8)
    })
});