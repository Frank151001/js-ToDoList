function addItem(){
    let itemName =prompt("Type your item");
    let itemPrice = Number(prompt("How much it cost?"));
    let quantity = Number (prompt("How many are"));
    let totalItem = (itemPrice*quantity);
    let tax = (totalItem)*.08;
    let totalTicket = tax+totalItem;

    document.getElementById("Items").innerHTML=`
    <p>Item: ${itemName} </p>
    <p>Item's Price: ${itemPrice} </p>
    <hr>
    <p> Tax: 8%
    <p>Subotal: ${totalItem} </p>
    <p>Total: ${totalTicket} </p>
    `;
}