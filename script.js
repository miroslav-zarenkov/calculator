let num1 = 0;
let num2 = 0;
let num3 = 0;
let operator;
let inputBox = document.querySelector("#input-box");
inputBox.value = "";
inputBox.innerHTML = inputBox.value;

let percentageButton = document.querySelector("#button-percentage")
let reverseButton = document.querySelector("#button-reverse");
let commaButton = document.querySelector("#button-comma");
let clearButton = document.querySelector("#button-clear");
let resultButton = document.querySelector("#button-result");
let addButton = document.querySelector("#button-add");
let subtractButton = document.querySelector("#button-subtract");
let multiplyButton = document.querySelector("#button-multiply");
let divideButton = document.querySelector("#button-divide");
let nineButton = document.querySelector("#button-9");
let eightButton = document.querySelector("#button-8");
let sevenButton = document.querySelector("#button-7");
let sixButton = document.querySelector("#button-6");
let fiveButton = document.querySelector("#button-5");
let fourButton = document.querySelector("#button-4");
let threeButton = document.querySelector("#button-3");
let twoButton = document.querySelector("#button-2");
let oneButton = document.querySelector("#button-1");
let zeroButton = document.querySelector("#button-0");

percentageButton.addEventListener("click", percentage)
reverseButton.addEventListener("click", reverse)
commaButton.addEventListener("click", comma);
clearButton.addEventListener("click", clearInput);
resultButton.addEventListener("click", resultBtn);
addButton.addEventListener("click", addBtn);
subtractButton.addEventListener("click", subtractBtn);
multiplyButton.addEventListener("click", multiplyBtn);
divideButton.addEventListener("click", divideBtn);
nineButton.addEventListener("click", numberValue);
eightButton.addEventListener("click", numberValue);
sevenButton.addEventListener("click", numberValue);
sixButton.addEventListener("click", numberValue);
fiveButton.addEventListener("click", numberValue);
fourButton.addEventListener("click", numberValue);
threeButton.addEventListener("click", numberValue);
twoButton.addEventListener("click", numberValue);
oneButton.addEventListener("click", numberValue);
zeroButton.addEventListener("click", numberValue);

function add(num1, num2) {
    return num3 = num1 + num2;
}

function subtract(num1, num2) {
    return num3 = num1 - num2;
}

function multiply(num1, num2) {
    return num3 = num1 * num2;
}

function divide(num1, num2) {
    return num3 = num1 / num2;
}

function percentage() {
    if (num1 != 0) {
        num2 = parseFloat(inputBox.value);
        inputBox.value = (num1 / 100) * num2;
        inputBox.innerHTML = parseFloat(inputBox.value.toFixed(5));
    } else {
        parseFloat(inputBox.value);
        inputBox.value = inputBox.value / 100;
        inputBox.innerHTML = inputBox.value;
    }
}

function reverse() {
    if (inputBox.value != "") {
        parseFloat(inputBox.value);
        inputBox.value = inputBox.value * -1;
        inputBox.innerHTML = inputBox.value;
    } else {
        return
    }
}

function comma() {
    inputBox.value = inputBox.value + ".";
    parseFloat(inputBox.value);
    inputBox.innerHTML = inputBox.value;
}

function operate(operator, a, b) {
    operator(a, b)
}

function numberValue() {
    if (num3 == 0) {
        inputBox.value = inputBox.value + this.value;
        inputBox.innerHTML = inputBox.value;
    } else {
        inputBox.value = this.value;
        inputBox.innerHTML = inputBox.value;
        num3 = 0;
    }
}

function addBtn() {
    num1 = parseFloat(inputBox.value);
    inputBox.value = "";
    inputBox.innerHTML = inputBox.value;
    operator = add;
}

function subtractBtn() {
    num1 = parseFloat(inputBox.value);
    inputBox.value = "";
    inputBox.innerHTML = inputBox.value;
    operator = subtract;
}

function multiplyBtn() {
    num1 = parseFloat(inputBox.value);
    inputBox.value = "";
    inputBox.innerHTML = inputBox.value;
    operator = multiply;
}

function divideBtn() {
    num1 = parseFloat(inputBox.value);
    inputBox.value = "";
    inputBox.innerHTML = inputBox.value;
    operator = divide;
}

function resultBtn() {
    num2 = parseFloat(inputBox.value);
    operate(operator, num1, num2);
    if (num3 == Infinity) {
        inputBox.value = "Stop! You have violated the law!";
        inputBox.innerHTML = inputBox.value;
        inputBox.value = "";
        num1 = 0;
        num2 = 0;
        num3 = 0;
    } else {
        num1 = num3;
        inputBox.value = parseFloat(num1.toFixed(3));
        inputBox.innerHTML = inputBox.value;
        num2 = 0;
    }

}

function clearInput() {
    num1 = 0;
    num2 = 0;
    num3 = 0;
    inputBox.value = "";
    inputBox.innerHTML = inputBox.value;
}