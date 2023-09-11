const Candy = require('./candy');

class ShoppingBasket {
    // let #basket;
    constructor() {
        this.basket = [];
        this.discount = 0;
    }

    applyDiscount(discount) {
        this.discount = discount;
    }


    getTotalPrice() {
        let sum = 0;
        this.basket.forEach((candy) => {
            sum += candy.getPrice();
        })
        return sum - this.discount;
    }

    addItem(candy) {
        this.basket.push(candy)
    }
}

module.exports = ShoppingBasket;
