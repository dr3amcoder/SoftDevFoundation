const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
    it('takes 2 args - string and max price, returns result that satisfies search parameters', () => {
        expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
    })

    it('takes 2 args - string and max price, returns result that satisfies search parameters', () => {
        expect(searchCandies('Ma', 2)).toEqual(['Mars']);
    })

    it('takes 2 args - string and max price, returns result that satisfies search parameters', () => {
        expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
    })

    it('takes 2 args - string and max price, returns result that satisfies search parameters', () => {
        expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
    })

    it('takes 2 args - string and max price, returns result that satisfies search parameters', () => {
        expect(searchCandies('s', 4)).toEqual(['Skitties', 'Skittles']);
    })
});