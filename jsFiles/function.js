"use strict";
const sampleFunction = (str1, str2, callBack) => {
    console.log(callBack(str1, str2));
};
const simpleFunction = (str1, str2) => {
    return (str1 + str2);
};
sampleFunction('Hello ', 'World', simpleFunction);
// the rest operator
const restTesting = (...numbers) => {
    console.log(numbers.reduce((x, y) => x + y));
};
console.log('restTesting here');
restTesting(10, 10, 10);
