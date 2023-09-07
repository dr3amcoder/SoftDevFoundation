const {add, multiply} = require('./add');

describe('add', () => {
    it('adds num1 & num 2', () => {
        expect(add(2, 2)).toBe(4);
    });

    it('adds num1 & num 2', () => {
        expect(add(0, 5)).toBe(5);
    });
});

describe('multiply', () => {
    it('multiplies num1 & num2', () => {
        expect(multiply(2, 2)).toBe(4);
    })
})