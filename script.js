function add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
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
    if (operator === '+') {
        return add(num1, num2);
    }else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === 'x') {
       return multiply(num1, num2);
    } else if (operator === '/') {
       return divide(num1, num2);
    }
}

function calc() {
    total = operate(symbol, value1, value2);
    const displays = document.querySelector('.display');
    displays.textContent = total
    console.log(total)
    symbol = undefined
    value1 = total
    value2 = ''
    
}

function calc2() {
    total = operate(symbol, value1, value2);
    const displays = document.querySelector('.display');
    displays.textContent = total;
    console.log(total)
    value1 = total
    value2 = ''
}
//transfer symbol, value1 & value2 into operate function
let equals = document.querySelector('.equals');

let total;

equals.addEventListener('click', () => {
    calc()
})
// get value1 & value2
let inputNum = document.querySelectorAll('.numberBtn');

let value1 = '';
let value2 = '';

inputNum.forEach((button) => {
    button.addEventListener('click', (e) => {
        valueA = e.target.value
        if ((value1 !== total) && symbol === undefined) {
            value1 += valueA
            const displays = document.querySelector('.display');
            displays.textContent = value1;
            console.log(value1)
        } else if (symbol === 'x' || symbol === '+' || symbol === '-' || symbol === '/') {
            value2 += valueA
            const displays = document.querySelector('.display');
            displays.textContent = '';
            displays.textContent = value2
            console.log(value2)
        }
    })
})

//get operator
const inputOp = document.querySelectorAll('.operatorBtn');

let symbol;

inputOp.forEach((button) => {
    if (symbol === undefined) {
        button.addEventListener('click', (e) => {
            symbol = e.target.value
                if (value2 === '') {
                const displays = document.querySelector('.display');
                displays.textContent = symbol
                console.log(symbol)
                return symbol
            } else if (symbol){ //not sure if this is needed
                calc2() //something wrong with calc2 
            }else if (value2 !== '') {
                const displays = document.querySelector('.display');
                displays.textContent = symbol
                console.log(symbol)
                calc2()
            }
        })
    }
})

//clear display
let cleared = document.querySelector('.clear');

cleared.addEventListener('click', () => {
    symbol = undefined
    value1 = ''
    value2 = ''
    const displays = document.querySelector('.display');
    displays.textContent = '';
})