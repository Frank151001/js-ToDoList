function calculator(){
    let num1= Number(prompt("Enter your first number"));
    let num2 = Number (prompt("Enter your second number"));
    let operator =prompt("Select the operator");
    switch(operator){
        case '+': 
            sum(num1,num2)
            break;
        case '-': 
            res(num1,num2)
            break;
        case '*': 
            multiply(num1,num2)
            break;
        case '/':
            divide(num1,num2)
            break;
        default:
            document.write("That option dosen't exist choose another one");
            break;
    }
    console.log(num1,num2);

   
}

function sum(a,b){
    document.getElementById("Results").innerHTML=`
    <p>${a} + ${b} = ${a+b}</p>
    `
}

function res(a,b){
    document.getElementById("Results").innerHTML=`
    <p>${a} - ${b} = ${a-b}</p>
    `
}

function multiply(a,b){
    document.getElementById("Results").innerHTML=`
    <p>${a} * ${b} = ${a*b}</p>
    `
}

function divide(a,b){
    document.getElementById("Results").innerHTML=`
    <p>${a} / ${b} = ${a/b}</p>
    `
}
