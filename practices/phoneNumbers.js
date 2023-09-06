const phoneNumber = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd',
    '0000000000000',
    '1111111111'
];

const checkLength = (number) => {
    if (number.length <= 10) {
        return true;
    } else {
        return false;
    }
}

const filterLongNumbers = (phoneNumbers) => {
    return phoneNumbers.filter(checkLength);
}

console.log(filterLongNumbers(phoneNumber));