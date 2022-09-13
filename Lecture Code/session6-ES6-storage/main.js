import {anyMath} from './math.js'
let math = new anyMath();

let number1, number2;
let result;

const number1Txt = document.querySelector("#number1-txt");
const number2Txt = document.querySelector("#number2-txt");

const multiplyBtn = document.querySelector("#multiply-btn");
const divideBtn = document.querySelector("#divide-btn");
const addBtn = document.querySelector("#add-btn");
const subtractBtn = document.querySelector("#subtract-btn");

const resultMultiplicationP = document.querySelector("#result-multiplication-p");
const resultDivisionP = document.querySelector("#result-division-p");
const resultAdditionP = document.querySelector("#result-addition-p");
const resultSubtractionP = document.querySelector("#result-subtraction-p");

const setNumbers = () => {
	number1 = number1Txt.value;
	number2 = number2Txt.value;	
}

const showAddition = () => {	
	setNumbers();
	result = math.add( number1, number2 );
	resultAdditionP.innerHTML = `Addert: ${result}`;
}

const showSubtraction = () => {	
	setNumbers();
	result = math.subtract( number1, number2 );
	resultSubtractionP.innerHTML = `Subtrahert: ${result}`;
}

const showMultiplication = () => {	
	setNumbers();
	result = math.multiply( number1, number2 );
	resultMultiplicationP.innerHTML = `Multiplisert: ${result}`;
}

const showDivision = () => {
	setNumbers();
	result = math.divide( number1, number2 );
	resultDivisionP.innerHTML = `Dividert: ${result}`;
}

multiplyBtn.onclick = showMultiplication;
divideBtn.onclick = showDivision;
addBtn.onclick = showAddition;
subtractBtn.onclick = showSubtraction;
