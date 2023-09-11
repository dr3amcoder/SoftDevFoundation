const Candy = require('./candy');

class ShoppingBasket {
    // let #basket;
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
