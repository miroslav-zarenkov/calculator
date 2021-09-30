let num1 = 0;
let num2 = 0;
let num3 = 0;
let operator = "";
let operatorSign = "";
let infoBox = document.querySelector("#info-box")
let inputBox = document.querySelector("#input-box");
inputBox.value = "0";
inputBox.innerHTML = inputBox.value;

let percentageButton = document.querySelector("#button-percentage")
let reverseButton = document.querySelector("#button-reverse");
let commaButton = document.querySelector("#button-comma");
let clearButton = document.querySelector("#button-clear");
let clearLastButton = document.querySelector("#button-clear-last");
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
clearLastButton.addEventListener("click", clearLastCharacter);
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
    if (inputBox.value.toString().indexOf(".") > -1) {
        return;
    } else if (num3 != 0) {
        num3 = 0;
        inputBox.value = ".";
        parseFloat(inputBox.value);
        inputBox.innerHTML = inputBox.value;
    } else {
        inputBox.value = inputBox.value + ".";
        parseFloat(inputBox.value);
        inputBox.innerHTML = inputBox.value;
    }
}

function operate(operator, a, b) {
    operator(a, b)
}

function numberValue() {
    if (inputBox.value.length > 10) {
        inputBox.value = inputBox.value.substring(0, 11);
    } else {
        if (inputBox.value === "0.") {
            inputBox.value = inputBox.value + this.value;
            inputBox.innerHTML = inputBox.value;
        } else if (infoBox.innerHTML === "Can't divide by zero!") {
            inputBox.value = this.value;
            inputBox.innerHTML = inputBox.value;
            infoBox.innerHTML = "";
        } else if (inputBox.value == 0) {
            inputBox.value = this.value;
            inputBox.innerHTML = inputBox.value;
        } else if (typeof inputBox.value == 'number') {
            inputBox.value = this.value;
            inputBox.innerHTML = inputBox.value;
            infoBox.innerHTML = "";
        } else {
            inputBox.value = inputBox.value + this.value;
            inputBox.innerHTML = inputBox.value;
        }
    }
}

function addBtn() {
    if (operator != "") {
        resultBtn();
        num1 = parseFloat(inputBox.value);
        inputBox.value = "";
        inputBox.innerHTML = inputBox.value;
        operatorSign = "+";
        operator = add;
    } else {
        num1 = parseFloat(inputBox.value);
        inputBox.value = "";
        inputBox.innerHTML = inputBox.value;
        operatorSign = "+";
        operator = add;
    }
    infoBox.innerHTML = `${num1} ${operatorSign}`
}

function subtractBtn() {
    if (operator != "") {
        resultBtn();
        num1 = parseFloat(inputBox.value);
        inputBox.value = "";
        inputBox.innerHTML = inputBox.value;
        operatorSign = "-";
        operator = subtract;
    } else {
        num1 = parseFloat(inputBox.value);
        inputBox.value = "";
        inputBox.innerHTML = inputBox.value;
        operatorSign = "-";
        operator = subtract;
    }
    infoBox.innerHTML = `${num1} ${operatorSign}`
}

function multiplyBtn() {
    if (operator != "") {
        resultBtn();
        inputBox.value = "";
        inputBox.innerHTML = inputBox.value;
        operatorSign = "*";
        operator = multiply;
        infoBox.innerHTML = `${num1} ${operatorSign}`
    } else {
        num1 = parseFloat(inputBox.value);
        inputBox.value = "";
        inputBox.innerHTML = inputBox.value;
        operatorSign = "*";
        operator = multiply;
    }
    infoBox.innerHTML = `${num1} ${operatorSign}`
}

function divideBtn() {
    if (operator != "") {
        resultBtn();
        num1 = parseFloat(inputBox.value);
        inputBox.value = "";
        inputBox.innerHTML = inputBox.value;
        operatorSign = "/";
        operator = divide;
    } else {
        num1 = parseFloat(inputBox.value);
        inputBox.value = "";
        inputBox.innerHTML = inputBox.value;
        operatorSign = "/";
        operator = divide;
    }
    infoBox.innerHTML = `${num1} ${operatorSign}`
}


function resultBtn() {
    if (operator == "") {
        return;
    } else {
        num2 = parseFloat(inputBox.value);
        operate(operator, num1, num2);
        infoBox.innerHTML = `${num1} ${operatorSign} ${num2} =`
        if ((num2 === 0) || (num2 === NaN) || (num1 === NaN)) {
            infoBox.innerHTML = "Can't divide by zero!";
            inputBox.value = "";
            inputBox.innerHTML = inputBox.value;
            num1 = "0";
            num2 = "0";
            num3 = "0";
        } else {
            num1 = num3;
            inputBox.value = parseFloat(num1.toFixed(3));
            inputBox.innerHTML = inputBox.value;
            num2 = "0";
            num3 = "0";
        }
        operator = "";
    }
}

function clearInput() {
    num1 = "0";
    num2 = "0";
    num3 = "0";
    operator = "";
    operatorSign = "";
    infoBox.innerHTML = "<br />";
    inputBox.value = "0";
    inputBox.innerHTML = inputBox.value;
}

function clearLastCharacter() {
    if (inputBox.value === "0") {
        return;
    } else {
        inputBox.value = inputBox.value.toString().slice(0, -1);
        inputBox.innerHTML = inputBox.value;
    }
}


window.addEventListener('keydown', function(e) {
    switch (e.key) {
        case "1":
            this.value = e.key;
            numberValue();
            oneButton.classList.add("button-down");
            break;
        case "2":
            this.value = e.key;
            numberValue();
            twoButton.classList.add("button-down");
            break;
        case "3":
            this.value = e.key;
            numberValue();
            threeButton.classList.add("button-down");
            break;
        case "4":
            this.value = e.key;
            numberValue();
            fourButton.classList.add("button-down");
            break;
        case "5":
            this.value = e.key;
            numberValue();
            fiveButton.classList.add("button-down");
            break;
        case "6":
            this.value = e.key;
            numberValue();
            sixButton.classList.add("button-down");
            break;
        case "7":
            this.value = e.key;
            numberValue();
            sevenButton.classList.add("button-down");
            break;
        case "8":
            this.value = e.key;
            numberValue();
            eightButton.classList.add("button-down");
            break;
        case "9":
            this.value = e.key;
            numberValue();
            nineButton.classList.add("button-down");
            break;
        case "0":
            this.value = e.key;
            numberValue();
            zeroButton.classList.add("button-down");
            break;
        case "=":
            resultBtn();
            resultButton.classList.add("button-down");
            break;
        case "+":
            addBtn();
            addButton.classList.add("button-down");
            break;
        case "-":
            subtractBtn();
            subtractButton.classList.add("button-down");
            break;
        case "/":
            divideBtn();
            divideButton.classList.add("button-down");
            break;
        case "*":
            multiplyBtn();
            multiplyButton.classList.add("button-down");
            break;
        case "%":
            percentage();
            percentageButton.classList.add("button-down");
            break;
        case ".":
            comma();
            commaButton.classList.add("button-down");
            break;
        case "Delete":
            clearInput();
            clearButton.classList.add("button-down");
            break;
        case "Control":
            reverse();
            reverseButton.classList.add("button-down");
            break;
        case "Backspace":
            clearLastCharacter();
            clearLastButton.classList.add("button-down");
            break;
        default:
            break;
    }
})

window.addEventListener('keyup', function(e) {
    switch (e.key) {
        case "1":
            oneButton.classList.remove("button-down");
            break;
        case "2":
            twoButton.classList.remove("button-down");
            break;
        case "3":
            threeButton.classList.remove("button-down");
            break;
        case "4":
            fourButton.classList.remove("button-down");
            break;
        case "5":
            fiveButton.classList.remove("button-down");
            break;
        case "6":
            sixButton.classList.remove("button-down");
            break;
        case "7":
            sevenButton.classList.remove("button-down");
            break;
        case "8":
            eightButton.classList.remove("button-down");
            break;
        case "9":
            nineButton.classList.remove("button-down");
            break;
        case "0":
            zeroButton.classList.remove("button-down");
            break;
        case "=":
            resultButton.classList.remove("button-down");
            break;
        case "+":
            addButton.classList.remove("button-down");
            break;
        case "-":
            subtractButton.classList.remove("button-down");
            break;
        case "/":
            divideButton.classList.remove("button-down");
            break;
        case "*":
            multiplyButton.classList.remove("button-down");
            break;
        case "%":
            percentageButton.classList.remove("button-down");
            break;
        case ".":
            commaButton.classList.remove("button-down");
            break;
        case "Delete":
            clearButton.classList.remove("button-down");
            break;
        case "Control":
            reverseButton.classList.remove("button-down");
            break;
        case "Backspace":
            clearLastButton.classList.remove("button-down");
            break;
        default:
            break;
    }
})