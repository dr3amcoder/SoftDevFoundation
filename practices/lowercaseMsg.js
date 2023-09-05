const lowercaseMessage = (message) => {
    console.log(message.toLowerCase());
}

const transform = (message, transformFunction) => {
    console.log(transformFunction(message));
}

module.exports = lowercaseMessage;
module.exports = transform;