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

function operate(op, num1, num2) {
    let result;
    switch (op) {
        case '+': result = add(num1, num2);
        case '-': result = subtract(num1, num2);
        case 'x': result = multiply(num1, num2);
        case '/': result = divide(num1, num2);
    }
    return result;
}

function populateNumber(numStr) {
    let prevNum = parseInt(display.textContent)
    let newNum = prevNum*10 + parseInt(numStr);
    display.textContent = newNum;
}

let num1 = 0;
let num2 = 0;
let op;

let display = document.querySelector('.display');

const numericButtons = document.querySelectorAll(".num");

for (let numBtn of numericButtons) {
    numBtn.addEventListener("click", (e) => {
        populateNumber(e.target.id);
    })
}