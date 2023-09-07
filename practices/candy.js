class Candy {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

}

module.exports = Candy;

// creating instance of Candy class
const mars = new Candy('Mars', 1.20);

// printing the methods of the class
console.log(mars.getName());
console.log(mars.getPrice());