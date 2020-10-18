const input1 = document.querySelector('#number1')! as HTMLInputElement;
const input2 = document.querySelector('#number2')! as HTMLInputElement;
const addButton = document.querySelector('.add')! as HTMLButtonElement;
const clearButton = document.querySelector('.clear')! as HTMLButtonElement;
const result = document.querySelector('p')! as HTMLParagraphElement;

const add = (num1:number,num2:number):string =>{
    return (num1+num2).toString()
}

addButton.addEventListener('click',(e)=>{
    result.textContent = add(+input1.value,+input2.value);
    input1.value = "";
    input2.value = "";
});

clearButton.addEventListener('click',(e)=>{
    result.textContent = "";
});

