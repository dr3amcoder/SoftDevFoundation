// Using the normal string interpolation to print the return statement into terminal
// const sayHello = (name) => {
//     return 'Hello ' + name;
// };


// Using the back ticks is another way to print the return msg
// into terminal without using string interpolation
// encapsulate your rtn statement in back ticks then use dollar sign &
// curly brackets to encapsulate the variable inside it. See below for more info
const sayHello = (name) => {
    return `Hello ${name}`;
};

module.exports = sayHello; //enabler for your terminal to export / call this outside of the file