const form = document.forms[0]! as HTMLFormElement;
form.addEventListener('submit',(e:Event):void=>{
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.age.value);
})



enum Signature {Director="Shadman", Manager="Martin", Client="Piyal"};

type StringNumber = (string|number);

type rfr = {
    referenceName:string;
    referenceNumber:number;
    govtId:(string|number);
}

type Literal = "Shadman" | "Martin" | "Piyal";


let information:{
    name:string;
    age:number;
    skills:string[];
    reference:rfr[];
    cgpa:[number,number];
    sign:string;
    literal:Literal;
}

information = {
    name:'Abdullah Hasan Sarker',
    age:30,
    skills:['HTML','CSS','JavaScript','TypeScript'],
    reference:[
        {referenceName:'Abu',referenceNumber:121,govtId:'121'},
        {referenceName:'Dullah',referenceNumber:220,govtId:200}
    ],
    cgpa:[4.00,3.00],
    sign:Signature.Director,
    literal:'Piyal'
}

console.log(information);