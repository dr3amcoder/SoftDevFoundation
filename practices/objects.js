const person = {
    name: 'Maxine',
    age: 32,
    address: {
        city: 'London',
        postcode: 'E1 123'
    },
    hobbies: ['writing', 'tennis', 'cooking']
};

// print the value of the city attribute ('London')
console.log(person.address.city);

// print the value of the second hobbies value ('tennis')
console.log(person.hobbies[1]);