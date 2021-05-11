function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator === 'add') {
        return add(num1, num2);
    }else if (operator === 'subtract') {
        return subtract(num1, num2);
    } else if (operator === 'multiply') {
       return multiply(num1, num2);
    } else if (operator === 'divide') {
       return divide(num1, num2);
    }
}

function data(valueA, symbol) {
   const displays = document.querySelector('.display');
   //let values = displays.textContent = valueA;
   let operation = displays.textContent = valueA + " " + symbol;
   console.log(operation)
   if (valueA === true) { //problem with if statment also values and operation get shown straight away
        return values
   } else if ((valueA === true) && (symbol === true )) {
       return operation
   }
   
}
const inputNum = document.querySelectorAll('.numberBtn');

inputNum.forEach((button) => {
    button.addEventListener('click', (e) => {
        const valueA = e.target.value
        data(valueA, '')
    })
})

 const inputOp = document.querySelectorAll('.operatorBtn');

 inputOp.forEach((button) => {
     button.addEventListener('click', (e) => {
        const symbol = e.target.value
        data('', symbol)
     })
 })