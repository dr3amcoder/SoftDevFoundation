const User = require('./userAccount');

const userList = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
]

class UserBase {

    constructor(userList) {
        this.users = userList;
    }

    count() {
        return this.users.length;
    }

    getNames() {
        return this.users.map((user) => user.getName());
    }

    getIntroductions() {
        return this.users.map((user) => user.getIntroduction());
    }
}


module.exports = UserBase;
console.log(userList.length);

const userBaseInstance = new UserBase(userList);
console.log(userBaseInstance.getNames());
console.log(userBaseInstance.getIntroductions());

