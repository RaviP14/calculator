function add(num1, num2) {
    return num1 + num2;
}

function subtract(num3, num4) {
    return num3 - num4;
}

function multiply(num5, num6) {
    return num5 * num6;
}

function divide(num7, num8) {
    return num7 / num8;
}

function operate(operator, num9, num10) {
    if (operator === 'add') {
        add(num9, num10);
    }else if (operator === 'subtract') {
        subtract(num9, num10);
    } else if (operator === 'multiply') {
        multiply(num9, num10);
    } else if (operator === 'divide') {
       divide(num9, num10);
    }
}