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
    if (num2 == 0) {
        document.body.style.backgroundImage = "url(https://i.insider.com/5aa2f1aec6e980060a8b45eb?width=700)";
        display.color = "white";
        reset();
        return;
    }
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
    let prevNum = displayingResult ? '0' : display.textContent;
    let newNum = prevNum === '0'? numStr : prevNum + numStr;

    displayingResult = false;
    updateDisplay(newNum);

    if (!op) {
        firstOperand = parseInt(newNum);
    } else {
        secondOperand = parseInt(newNum);
    }
}

function updateExp(expStr) {
    displayExp.textContent = expStr;
}

function updateDisplay(content) {
    display.textContent = content;
}

function updateOp(operator) {
    op = operator;
    updateDisplay('0');
}

function reset() {
    firstOperand = 0;
    secondOperand = 0;
    op = '';
    updateDisplay('0');
    updateExp('');
}

function clickedOp(event) {
    updateOp(event.target.id);
    exp = `${firstOperand} ${op} `;
    updateExp(exp);
}

function clickedEquals() {
    if (!op) {
        return;
    }

    let result = operate(op, firstOperand, secondOperand);
    updateDisplay(result);
    firstOperand = result;
    secondOperand = 0;
    op = '';
    updateExp('');

    displayingResult = true;
}

let firstOperand = 0;
let secondOperand = 0;
let op = '';
let exp = '';
let displayingResult = false;

let display = document.querySelector('.display.result');
let displayExp = document.querySelector('.display.exp');

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
            clickedOp(e);
        });
    }

    else if (btnClasses.contains("equals")) {
        btn.addEventListener("click", clickedEquals);
    }

    else if (btnClasses.contains("clear")) {
        btn.addEventListener("click", reset);
    }
}