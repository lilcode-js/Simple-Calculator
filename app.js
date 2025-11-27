function plus(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

let op = process.argv[3];
let num1 = Number(process.argv[2]);
let num2 = Number(process.argv[4]);

if (op === 'plus') {
    console.log(plus(num1, num2));

} else if (op === 'minus') {
    console.log(minus(num1, num2));

} else if (op === 'divide') {
    console.log(divide(num1, num2));

} else if (op === 'multiply') {
    console.log(multiply(num1, num2));

} else {
    console.log('This operation is not supported.');
}
