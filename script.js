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
    if (num2 === 0) {
        document.body.style.backgroundImage = "url(https://i.insider.com/5aa2f1aec6e980060a8b45eb?width=700)";
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
    let prevNum = clearOnNextClick ? '0' : display.textContent;
    let newNum = prevNum === '0'? numStr : prevNum + numStr;

    clearOnNextClick = false;
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
    clearOnNextClick = true;
    operatorToggled = true;
}

function reset() {
    firstOperand = 0;
    secondOperand = 0;
    updateOp('');
    updateDisplay('0');
    updateExp('');
    clearOnNextClick = false;
    operatorToggled = false;
}

function clickedOp(event) {
    updateOp(event.target.id);
    exp = `${firstOperand} ${op} `;
    updateExp(exp);
}

function clickedEquals(op) {
    if (!op) {
        return;
    }

    let result = operate(op, firstOperand, secondOperand);
    updateDisplay(result);
    firstOperand = result;
    secondOperand = 0;
    updateOp('');
    updateExp('');

    clearOnNextClick = true;
    operatorToggled = false;
}

function clickedDelete() {
    let oldOperand = display.textContent
    let newOperand = oldOperand.substring(0, oldOperand.length-1);

    if (!op) {
        firstOperand = parseInt(newOperand);
    } else {
        secondOperand = parseInt(newOperand);
    }
    updateDisplay(newOperand);
    clearOnNextClick = false;
}

let firstOperand = 0;
let secondOperand = 0;
let op = '';
let exp = '';
let clearOnNextClick = false;
let operatorToggled = false;

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
            if (operatorToggled) {
                secondOperand = (secondOperand === 0) ? firstOperand : secondOperand;
                clickedEquals(op);
            } 
            clickedOp(e);
        });
    }

    else if (btnClasses.contains("equals")) {
        btn.addEventListener("click", () => clickedEquals(op));
    }

    else if (btnClasses.contains("clear")) {
        btn.addEventListener("click", reset);
    }

    else if (btnClasses.contains("delete")) {
        btn.addEventListener("click", clickedDelete);
    }
 }