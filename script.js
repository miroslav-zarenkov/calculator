let inputBox = document.querySelector("#input-box");
let clearButton = document.querySelector("#clear");
let reverseButton = document.querySelector("#reverse");
let divideButton = document.querySelector("#divide");

clearButton.addEventListener("click", clearInputBox);
reverseButton.addEventListener("click", reverseInputBox);
divideButton.addEventListener("click", divideInputBox);


inputBox.value = "";
inputBox.innerHTML = inputBox.value;

function add(a, b) {
    return c = a + b;
}

function subtract(a, b) {
    return c = a - b;
}

function multiply(a, b) {
    return c = a * b;
}

function divide(a, b) {
    return c = a / b;
}

function percentage(a) {
    return a = a / 100;
}

function reverse(a) {
    return a = a * -1;
}

function comma(a) {
    return a = parseInt(a + ",");
}

function operate(operator, a, b) {
    operator(a, b);
}

function clearInputBox() {
    document.querySelector("#input-box").value = "";
    inputBox.innerHTML = inputBox.value;
}

function reverseInputBox() {
    inputBox.value = inputBox.value * -1;
    inputBox.innerHTML = inputBox.value;
}

function divideInputBox() {
    if (inputBox.innerHTML[inputBox.innerHTML.length - 1] == "/") {
        return
    } else
        inputBox.value = inputBox.value + "/";
    inputBox.innerHTML = inputBox.value;
}

function nine() {
    inputBox.value = inputBox.value + "9";
    inputBox.innerHTML = inputBox.value;
}

function parse(str) {
    inputBox.value = Function(`'use strict'; return (${str})`)();
    inputBox.innerHTML = inputBox.value;
}