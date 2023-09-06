let arr = [];
let newArr = [];

const addToBatch = (arr, num) => {
    if (arr.length < 5) {
        return newArr = arr.concat(num);
    } else {
        return arr
    }
}


module.exports = addToBatch;