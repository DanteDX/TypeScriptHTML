type sample = (str1:string,str2:string)=>string;

const sampleFunction = (str1:string,str2:string,callBack:sample):void =>{
    
    console.log(callBack(str1,str2));
}

const simpleFunction = (str1:string,str2:string):string =>{
    return(str1+str2);
}

sampleFunction('Hello ','World',simpleFunction);

// the rest operator
const restTesting = (...numbers:number[]):void =>{
    console.log(numbers.reduce((x,y)=> x+y));
}

console.log('restTesting here');
restTesting(10,10,10);