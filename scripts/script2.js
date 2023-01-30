let number;//initialization
number=10;
let promptName = prompt("Enter your name");

function greet(name){
    return "<p>Welcome " + name +"!</p>";
}
document.write(greet(promptName));

function sum(a,b){
    return a+b;
}
console.log(sum(5,12));

document.write `<h2>Challenge</h2>`;
function multiplyThree(number){
    let total = number*3;
    document.write(`<p> ${number} x 3 = ${total}</p>`);
    return total;
}