"use strict";
class Abstraction {
}
class MathAndEmotions extends Abstraction {
    constructor(n1, n2, s1, s2) {
        super();
        this.n1 = n1;
        this.n2 = n2;
        this.s1 = s1;
        this.s2 = s2;
        this.name = this.s1;
    }
    add(n1, n2) {
        return this.n1;
    }
    words(str1, str2) {
        return this.s1;
    }
    emotionOne(str) {
        return this.s1;
    }
    emotionTwo(str) {
        return Number(this.s1);
    }
    static getPI() {
        return 3.14;
    }
}
const emo1 = new MathAndEmotions(1, 2, '1', '1');
console.log(emo1);
console.log(MathAndEmotions.getPI());
/* Abstract classes can't have constructor functions, they can only be inherited
'asbtract' keyword within the abstract classes state such statement which must be implemented
in the class which is inhereting the abstract class itself ,

private properties can be only accessed within the class, even the classes inhereting won't be able to access it,
setting it to 'protected' allows it to be accessed from the child class

by default, everything is public

static methods properties are such which can only be called with the class itself */
class Demo {
    constructor(n) {
        console.log('this is a private constructor');
    }
    static getInstance(n) {
        return new Demo(n);
    }
}
const demo = Demo.getInstance(1);
console.log(demo);
