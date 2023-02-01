//GLOBAL VARS
let cart=[];
let prodID=0;
function addProduct(){
    let product = document.getElementById("txtProduct").value;
    cart.push(product);
    displayCart(product);
    document.getElementById("txtProduct").value=" ";
    numberOfProducts();
}
function displayCart(newProduct){
    let item = `<li id="${prodID}"> ${newProduct}<span onclick="deleteProduct(${prodID})">🗑️</span></li>`;
    const ul=document.getElementById("productList");
    ul.innerHTML+=item;
    prodID++;
}
function numberOfProducts(){
document.getElementById("amountProducts").innerHTML=cart.length;
}
function deleteProduct(id){
    document.getElementById(id).remove();
    cart.pop();
    numberOfProducts();
}

function init(){
    console.log("Init");
    numberOfProducts();
}
window.onload=init;