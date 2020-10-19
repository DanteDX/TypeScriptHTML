interface MathFunctions{
    add(n1:number,n2:number):number;
    words(s1:string,s2:string):string;
}

interface EmotionFunctions extends MathFunctions{
    emotionOne(str:string):string;
    emotionTwo(str:string):number;
}

abstract class Abstraction{
    abstract name:string;
}

class MathAndEmotions extends Abstraction  implements EmotionFunctions{
    constructor(readonly n1:number,readonly n2:number,readonly s1:string,readonly s2:string){
        super()
    }

    name = this.s1;

    add(n1:number,n2:number){
        return this.n1
    }
    words(str1:string,str2:string){
        return this.s1;
    }
    emotionOne(str:string){
        return this.s1;
    }
    emotionTwo(str:string){
        return Number(this.s1);
    }
    static getPI(){
        return 3.14;
    }
}

const emo1 = new MathAndEmotions(1,2,'1','1');
console.log(emo1);
console.log(MathAndEmotions.getPI());

/* Abstract classes can't have constructor functions, they can only be inherited 
'asbtract' keyword within the abstract classes state such statement which must be implemented
in the class which is inhereting the abstract class itself ,

private properties can be only accessed within the class, even the classes inhereting won't be able to access it,
setting it to 'protected' allows it to be accessed from the child class

by default, everything is public

static methods properties are such which can only be called with the class itself */


class Demo{
    private constructor(n:number){
        console.log('this is a private constructor');
    }
    static getInstance(n:number){
        return new Demo(n);
    }
}

const demo = Demo.getInstance(1);
console.log(demo);