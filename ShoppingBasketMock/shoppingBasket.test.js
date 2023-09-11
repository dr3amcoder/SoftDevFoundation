const ShoppingBasket = require('./shoppingbasket'); // use PascalCase when importing class
const Candy = require('./candy');

// const mockAddItem = jest.fn();
// // const mockGetTotalPrice = jest.fn();

// const mockShoppingBasket = jest.fn(() => ({
//     addItem: mockAddItem,
    // getTotalPrice: mockGetTotalPrice,
// }));


// // mock start
// describe('unit/mock test', () => {
//     it('Mock test on Adding a Candy to Basket', () => {
//         const basket = new mockShoppingBasket();

//         basket.addItem({name:'Candy', price: 2.99});

//         expect(mockAddItem).toHaveBeenCalledWith({name:'Candy', price: 2.99});
//     })

//     it('Mock test on getTotalPrice', () => {
//         const basket2 = new mockShoppingBasket();

//         basket2.addItem({name:'Candy', price: 2.99});
//         // basket2.getTotalPrice(2.99);

//         expect(mockGetTotalPrice).toHaveBeenCalledWith(2.99);
//     })
// })



describe('Unit/Mock test to create a basket', () => {
    it('It instantiate with an empty list', () => {
        const shoppingBasket = new ShoppingBasket();
        expect(shoppingBasket.basket).toEqual([]);
    })

    // no mocking as we are using the actual Candy and ShoppingBasket class
    // but not using any methods from Candy class
    it('Adds candy to the basket', () => {
        const shoppingBasket = new ShoppingBasket();
        const candy = new Candy('snicker', 1.99);
        shoppingBasket.addItem(candy);
        expect(shoppingBasket.basket).toEqual([candy]);
    })

    // full mock, fully independent from Candy class.
    // Only using a mock value here: mockCandy
    it('It calculates the total price of items in the basket', () => {
        const shoppingBasket = new ShoppingBasket();
        // const candy = new Candy('snicker', 1.99);
        // jest.spyOn(candy, 'getPrice').mockReturnValue(1.99);
        const mockCandy = {getPrice: () => 1.99}
        shoppingBasket.addItem(mockCandy);
        expect(shoppingBasket.getTotalPrice()).toEqual(1.99);
    })


    it('It returns price of the candy in the basket', () => {
        const shoppingBasket = new ShoppingBasket();
        const mockCandy = {getPrice: () => 1.99}
        shoppingBasket.addItem(mockCandy);
        expect(shoppingBasket.getTotalPrice()).toEqual(1.99);
    })


    it('It returns the total price of the candy - discount', () => {
        const shoppingBasket = new ShoppingBasket();
        const mockCandy = {getPrice: () => 1.99}
        shoppingBasket.addItem(mockCandy);
        shoppingBasket.applyDiscount(1);
        expect(shoppingBasket.getTotalPrice()).toEqual(0.99);
    })


})