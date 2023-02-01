let myArray=["What is the meaning of life?",42,true];
console.table(myArray);

for(let i=0;i<myArray.length;i++){
    document.write(`<p>${myArray[i]}</p>`);
}

const numbers=[10,20,30,40,50];
console.table(numbers);

const months=["Jan","Feb","Mar","Apr","May"];
console.table(months);

//Acces to the values in the array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

//Array dimension
console.log(numbers.lenght);

for(let j=0;j<5;j++){
        document.write(`<li>${months[j]}</li>`);
        document.write(`<li>${numbers[j]}</li>`);
}

let i=25;
while(i>20){
    console.log(i+ " Bottles on the wall ");
    i-=1;
}
