function calculator(num1, num2, operator) {
    switch (true) {
        case operator === '+':
            console.log(num1 + num2);
            break;
        case operator === '-':
            console.log(num1 - num2);
            break;
        case operator === '*':
            console.log(num1 * num2);
            break;
        case operator === '/':
            console.log(num1 / num2);
            break;
        default:
            console.log('Invalid operator');
            break;
    }
};
calculator(3, 4, '/');

// Or His Method
function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
    }
    console.log(result);
    return result;
}

calculator(3, 4, '+');



