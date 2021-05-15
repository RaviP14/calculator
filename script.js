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

function exponential(num1, num2) {
    totals = Math.pow(num1, num2)
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
    } else if (operator === 'x^y') {
        return exponential(num1, num2)
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
    //console.log(total)
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
    //console.log(total)
    value1 = total
    value2 = ''
    decimalVal = undefined
    decimalVal2 = undefined
}
//transfer symbol, value1 & value2 into operate function (equals button)
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
        valueA = e.currentTarget.value
        if ((value1 !== total) && symbol === undefined) {
            value1 += valueA
            const displays = document.querySelector('.display');
            displays.textContent = value1;
            //console.log(value1)
        } else if (symbol === 'x' || symbol === '+' || symbol === '-' || symbol === '/' || symbol === 'x^y') {
            value2 += valueA
            const displays = document.querySelector('.display');
            displays.textContent = '';
            displays.textContent = value2
            //console.log(value2)
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
        decimalVal = e.currentTarget.value
        value1 += decimalVal
        //console.log(value1)
        displays.textContent = value1
    } else if ((displays.textContent === value2) && decimalVal2 == undefined) {
        decimalVal2 = e.currentTarget.value
        value2 += decimalVal2
        //console.log(value2)
        displays.textContent = value2
    }
})

//get operator
const inputOp = document.querySelectorAll('.operatorBtn');

let symbol;

inputOp.forEach((button) => {
    if (symbol === undefined) {
        button.addEventListener('click', (e) => {
            symbol = e.currentTarget.value
                if (value2 === '') {
                const displays = document.querySelector('.display');
                displays.textContent = symbol
                //console.log(symbol)
                return symbol
            } else if (symbol){ 
                calc2()
            }else if (value2 !== '') { //not sure if this is needed
                const displays = document.querySelector('.display');
                displays.textContent = symbol
                //console.log(symbol)
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

//backspace
let backspace = document.querySelector('.backSpace');

backspace.addEventListener('click', () => {
    const displays = document.querySelector('.display');
    if (displays.textContent === value1) {
        value1 = value1.slice(0, -1);
        //console.log(value1)
        displays.textContent = value1
    } else if (displays.textContent === value2) {
        value2 = value2.slice(0, -1);
        //console.log(value2)
        displays.textContent = value2
    }
})
//percent
let percent = document.querySelector('.percent');

percent.addEventListener('click', () => {
    const displays = document.querySelector('.display');
    if (displays.textContent === value1) {
        value1 = value1 / 100;
        //console.log(value1)
        displays.textContent = value1
    } else if (displays.textContent === value2) {
        value2 = value2 / 100;
        //console.log(value2)
        displays.textContent = value2
    } else if (displays.textContent && !symbol) {
        total = total/100;
        //console.log(total)
        displays.textContent = total
        total = value1
    }
})


//KEYBOARD SUPPORT(NOT WORKING YET)
//keyboard numbers
document.addEventListener('keydown', (e) => {
    
    if ((value1 !== total && symbol === undefined) &&
     (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9' || e.key === '0')) {
        value1 += e.key
        console.log(value1)
        const displays = document.querySelector('.display');
        displays.textContent = value1
    } else if ((symbol === 'x' || symbol === '+' || symbol === '-' || symbol === '/' || symbol === 'x^y')
     && (e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9' || e.key === '0')) {
        value2 += e.key
        console.log(value2)
        const displays = document.querySelector('.display');
        displays.textContent = value2
        total = operate(symbol, value1, value2);
    }
    
})

//keyboard symbols
document.addEventListener('keydown', (e) => {
    const displays = document.querySelector('.display');
    if (value2 === '' && (e.key === '-' || e.key === '+' || e.key === '/')) {
        symbol = e.key
        displays.textContent = symbol
    } else if (value2 === '' && e.key === '^') {
        symbol = 'x^y'
        displays.textContent = symbol
    } else if (value2 === '' && e.key === '*') {
        symbol = 'x'
        displays.textContent = symbol
    } else if (symbol && value2 !== '' && (e.key === '-' || e.key === '+' || e.key === '/')){
        calc2();
        symbol = e.key;
    } else if (symbol && value2 !== '' && (e.key === '^')) {
        calc2();
        symbol = 'x^y';
    } else if (symbol && value2 !== '' && (e.key === '*')) {
        calc2();
        symbol = 'x'
        
    }
})

//clear display with delete key
document.addEventListener('keydown', (e) =>{
    if (e.key === 'Delete') {
        symbol = undefined
        value1 = ''
        value2 = ''
        decimalVal = undefined
        decimalVal2 = undefined
        const displays = document.querySelector('.display');
        displays.textContent = '';
    }
})


//decimal key
document.addEventListener('keydown', (e) => {
    const displays = document.querySelector('.display');
    if (e.key === '.' && (displays.textContent === value1) && decimalVal === undefined) {
        decimalVal = e.key
        value1 += decimalVal
        displays.textContent = value1
    } else if (e.key === '.' && (displays.textContent === value2) && decimalVal2 == undefined) {
        decimalVal2 = e.key
        value2 += decimalVal2
        displays.textContent = value2
    }
})

//percent key

document.addEventListener('keydown', (e) => {
    const displays = document.querySelector('.display');
    if (e.key === '%' && (displays.textContent === value1)) {
        value1 = value1 / 100;
        displays.textContent = value1
    } else if (e.key === '%' && (displays.textContent === value2)) {
        value2 = value2 / 100;
        displays.textContent = value2
    } else if (e.key === '%' && (displays.textContent && !symbol)) {
        total = total/100;
        displays.textContent = total
        total = value1
    }
})

//equals key

document.addEventListener('keydown', (e) => {
    if (e.key === '=' && (value1 !== '' && value2 !== '' && symbol !== undefined)) {
        calc()
    }
})

//backspace key

document.addEventListener('keydown', (e) => {
    const displays = document.querySelector('.display');
    if (displays.textContent === value1 && e.key === 'Backspace') {
        value1 = value1.slice(0, -1);
        //console.log(value1)
        displays.textContent = value1
    } else if (displays.textContent === value2 && e.key === 'Backspace') {
        value2 = value2.slice(0, -1);
        //console.log(value2)
        displays.textContent = value2
    }
})