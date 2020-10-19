"use strict";
// generics are used to decalre what kind of data flows in input,inside and output of a function/class
// class<T> , so inside there we can use a type of 'T' easily
const demo1 = (n1, n2) => {
    return Object.assign(Object.assign({}, n1), n2);
};
const object101 = { name: 'shadman', age: 100, profession: 'web developer' };
const newObj = demo1(object101, object101);
console.log(newObj.name);
console.log(newObj.age);
console.log(newObj.profession);
