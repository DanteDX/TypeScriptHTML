// generics are used to decalre what kind of data flows in input,inside and output of a function/class
// class<T> , so inside there we can use a type of 'T' easily


interface sp{
    name:string;
    age:number;
    profession:string;
}

const demo1 = <T extends sp>(n1:T,n2:T):T =>{
    return {...n1,...n2};
}

const object101 = {name:'shadman',age:100,profession:'web developer'};

const newObj = demo1(object101,object101);
console.log(newObj.name);
console.log(newObj.age);
console.log(newObj.profession);

