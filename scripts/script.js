//alert("Something");
console.log("This is a message");
console.warn("This is a warning");
console.error("This is a error");

var user="francisco";//string
var gpa= 3.2;//number
var isActive=true;//bolean value

document.write('<p class="text"> Name: ' + user + '</p><p> GPA: '+ gpa +'</p><p> Student: ' + isActive +'</p>');

//Exercise #1//
var numberChildren = "2";
var partnerName = "Monserrat";
var geographicLocation = "Italy";
var jobTitle = "Developer";

document.write('<h3>Exercise #1 </h3>');
document.write(
    ` <p> You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberChildren} kids </p>`
);

/*Exercise #2
var userName = "Francisco";
var userEmail = "Franckgomez323@gmail.com";
var password = "1234";
var age = 21;
var country = "Mexico";
var salary = 5000;
const m=12;

document.write(
    `
    <p>Name: ${promptName}</p>
    <p>Email: ${promptEmail}</p>
    <p>Salary: ${promptSalary}</p>
    `
)
*/



let promptName = prompt("Enter your Name");
let promptEmail = prompt("Enter your Email");
let promptSalary = prompt("Enter your Salary");

document.write('<h3>Prompt Challange</h3>');
function info(name,email,salary){
    return `
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Salary: ${salary}</p>
    `
}
document.write(info(promptName,promptEmail,promptSalary))


