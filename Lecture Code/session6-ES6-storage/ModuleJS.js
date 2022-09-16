import anyMath from "./ModuleMath.js"

let math = new anyMath();

const number1Txt = document.getElementById("number1-txt");
const number2Txt = document.getElementById("number2-txt");

const multiplyBtn = document.getElementById("multiply-btn");
const divideBtn = document.getElementById("divide-btn");
const addBtn = document.getElementById("add-btn");
const subtractionBtn = document.getElementById("subtract-btn");

let number1;
let number2;

const getNumbers = () => {
    number1 = number1Txt.value;
    number2 = number2Txt.value;
}

const showMultiplication = () => {
    getNumbers();
    let result = math.multiply(number1, number2);
    document.getElementById("result-multiple-p").innerHTML = result;
};

multiplyBtn.onclick = showMultiplication;

