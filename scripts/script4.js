// let yourName="Francisco";
// if(confirm("Are you "+ yourName + "?")){
// 	console.log("Hello " + yourName);
// }else{
// 	console.log("Then what is your name?");
// }

// let number=99;
// if( number==99){
// console.log("")
// }

// let num1 =1;
// let num2 = 2;
// let num3 = 3;
// let notTrue=false;

// if(num1<num2&& num3>num2){
//     console.log("Num1 is smaller than num2 and num3 is larger than num2");
// }
// if(num1==1||num2==1||num3==1){
//     console.log("num1 is 1 or num2 is 1 or num3 is 1 ");
// }

// if(!notTrue){
//     console.log("Not not true is true")
// }

//loops
function displayNumbers(){
    for(let i=0;i<100;i+=10){
        document.write(`<li>${i}</li>`)
    }
}

//switch
let op=prompt("Enter you option: ");
switch(op){
    case '1':
        displayNumbers();
        break;
    case '2':
        console.log("Option 2");
        break;
    default:
        alert("Sorry, ytis is not an option");
        break;
}