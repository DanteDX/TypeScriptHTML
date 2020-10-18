var input1 = document.querySelector('#number1');
var input2 = document.querySelector('#number2');
var addButton = document.querySelector('.add');
var clearButton = document.querySelector('.clear');
var result = document.querySelector('p');
var add = function (num1, num2) {
    return (num1 + num2).toString();
};
addButton.addEventListener('click', function (e) {
    result.textContent = add(+input1.value, +input2.value);
    input1.value = "";
    input2.value = "";
});
clearButton.addEventListener('click', function (e) {
    result.textContent = "";
});
