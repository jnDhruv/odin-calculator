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
        case '+': result = add(num1, num2); break;
        case '-': result = subtract(num1, num2); break;
        case '*': result = multiply(num1, num2); break;
        case '/': result = divide(num1, num2); break;
    }
    return result;
}

function populateNumber(numStr) {
    let prevNum = parseInt(display.textContent)
    let newNum = prevNum*10 + parseInt(numStr);
    display.textContent = newNum;

    if (!op) {
        firstOperand = newNum;
    } else {
        secondOperand = newNum;
    }
}

function updateOp(operator) {
    op = operator;
    display.textContent = "0";
}

let firstOperand = 0;
let secondOperand = 0;
let op = '';

let display = document.querySelector('.display');

const allButtons = document.querySelectorAll(".btn");

for (let btn of allButtons) {

    const btnClasses = btn.classList;

    if (btnClasses.contains("num")) {
        btn.addEventListener("click", (e) => {
            populateNumber(e.target.id);
        });
    }

    else if (btnClasses.contains("op")) {
        btn.addEventListener("click", (e) => {
            updateOp(e.target.id);
        });
    }

    else if (btnClasses.contains("equals")) {
        btn.addEventListener("click", () => {
            if (!op) {
                return;
            }

            let result = operate(op, firstOperand, secondOperand);
            display.textContent = result;
            firstOperand = result;
            secondOperand = 0;
            op = '';
        });
    }

    else if (btnClasses.contains("clear")) {
        btn.addEventListener("click", () => {
            firstOperand = 0;
            secondOperand = 0;
            op = '';
            display.textContent = '0';
        });
    }
}