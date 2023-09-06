// Exercise 1:
// Create an array of a few names of people you know and:
// Print the array's length.
// Print the second name of the array.
// Create a new array by adding a new name to the existing array.

const friendsList = ['William', 'Nicole', 'Deanne'];
console.log(friendsList.length);
console.log(friendsList[1]);

const newfriend = friendsList.concat('Dave');
console.log(newfriend);


// Exercise 2
// Create an array of all numbers from 1 to 10.
// Calculate the sum of all these numbers by looping through the array.
// You can use the method forEach to iterate over each element.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
numbers.forEach(number => {
    sum += number;
})

console.log(sum);