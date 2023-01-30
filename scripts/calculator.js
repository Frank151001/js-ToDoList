function startCalculator(){
    let firstNumber= Number(prompt("Enter your first number"));
    let secondNumber = Number (prompt("Enter your second number"));
    
    sum(firstNumber,secondNumber);
    res(firstNumber,secondNumber);
    multiply(firstNumber,secondNumber);
    divide(firstNumber,secondNumber);
}

function sum(a,b){
    document.getElementById("Results").innerHTML=`
    <p>${a} + ${b} = ${a+b}</p>;
    `
}

function res(a,b){
    document.getElementById("Results").innerHTML=`
    <p>${a} - ${b} = ${a-b}</p>;
    `
}

function multiply(a,b){
    document.getElementById("Results").innerHTML=`
    <p>${a} * ${b} = ${a*b}</p>;
    `
}

function divide(a,b){
    document.getElementById("Results").innerHTML=`
    <p>${a} / ${b} = ${a/b}</p>;
    `
}
startCalculator();