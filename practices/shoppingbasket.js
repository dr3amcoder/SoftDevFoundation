const Candy = require('./candy');

class ShoppingBasket {
    constructor() {
        this.basket = [];
    }

    getTotalPrice() {
        let sum = 0;
        this.basket.forEach((candy) => {
            sum += candy.getPrice();
        })
        return sum;
    }

    addItem(candy) {
        this.basket.push(candy)
    }
}

module.exports = ShoppingBasket;

// creating an instance of Candy class named mars
const mars = new Candy('Mars', 4.99);
// printing the methods of mars
console.log(mars.getName());
console.log(mars.getPrice());

// creating an instance of ShoppingBasket class named basket
const basket = new ShoppingBasket();

// printing the methods of basket
console.log(basket.getTotalPrice());
console.log(basket.addItem(mars));
console.log(basket.getTotalPrice());

// adding new 2 items into the basket list 
basket.addItem(new Candy('Skittles', 3.99));
basket.addItem(new Candy('Snickers', 3.99));

// printing the getTotalPrice method of the class
// to check if sum variable has been updated to show total price of all items in the basket
console.log(basket.getTotalPrice());