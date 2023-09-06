const nameList = [
    'Anna',
    'Laura',
    'Josh',
    'Min',
    'Karla'
];

const message = (name) => {
    return `Hi ${name}! 50% off our best candies for you today!`;
}

const generateMessages = (nameList) => {
    return nameList.map(message);
}

console.log(generateMessages(nameList));