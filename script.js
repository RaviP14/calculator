function add(num1, num2) {
    totals = parseFloat(num1) + parseFloat(num2);
    return rounded = Math.round(totals * 1000)/1000
}

function subtract(num1, num2) {
    totals = num1 - num2;
    return rounded = Math.round(totals * 1000)/1000
}

function multiply(num1, num2) {
    totals =  num1 * num2;
    return rounded = Math.round(totals * 1000)/1000
}

function divide(num1, num2) {
    totals = num1 / num2;
    return rounded = Math.round(totals * 1000)/1000
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
//when equals is pressed
function calc() {
    total = operate(symbol, value1, value2);
    const displays = document.querySelector('.display');
    if (total !== Infinity) {
        displays.textContent = total
    } else if (total === Infinity) {
        displays.textContent = 'Really?'
    }
    console.log(total)
    symbol = undefined
    value1 = total
    value2 = ''
    decimalVal = undefined
    decimalVal2 = undefined
}
//for continuous calcs
function calc2() {
    const displays = document.querySelector('.display');
    if (total !== Infinity) {
        displays.textContent = total
    } else if (total === Infinity) {
        displays.textContent = 'Really?'
    }
    console.log(total)
    value1 = total
    value2 = ''
    decimalVal = undefined
    decimalVal2 = undefined
}
//transfer symbol, value1 & value2 into operate function
let equals = document.querySelector('.equals');

let total;

equals.addEventListener('click', () => {
    if (value1 !== '' && value2 !== '' && symbol !== undefined) {
        calc()
    }
    
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
            total = operate(symbol, value1, value2);
        }
    })
})

//decimal point - not working with + (ignores decimals) 

let decimal = document.querySelector('.decimal');

let decimalVal;
let decimalVal2;

decimal.addEventListener('click', (e) => {
    const displays = document.querySelector('.display');
    if ((displays.textContent === value1) && decimalVal === undefined) {
        decimalVal = e.target.value
        value1 += decimalVal
        console.log(value1)
        displays.textContent = value1
    } else if ((displays.textContent === value2) && decimalVal2 == undefined) {
        decimalVal2 = e.target.value
        value2 += decimalVal2
        console.log(value2)
        displays.textContent = value2
    }
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
    decimalVal = undefined
    decimalVal2 = undefined
    const displays = document.querySelector('.display');
    displays.textContent = '';
})