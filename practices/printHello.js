const printHello = () => {
    console.log('a greeting message');
}

setTimeout(printHello, 3000);

const executeAfterDelay = (delay, callbackFunction) => {
    setTimeout(callbackFunction, delay * 1000);
}

console.log(executeAfterDelay(5, printHello));