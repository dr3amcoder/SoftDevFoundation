class User {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getIntroduction() {
        return `Hi, my name is ${this.name}` // string interpolation
    }

}

module.exports = User;