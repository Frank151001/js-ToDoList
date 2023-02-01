let tasks=[];
let taskID=0;
function addTask(){
    let task = document.getElementById("taskTxt").value;
    tasks.push(task);
    displayTask(task);
    document.getElementById("taskTxt").value="";
    updateNumber();

}

function displayTask(newTask){
    let task= `<li id="${taskID}"> ${newTask}<span onclick="deleteTask(${taskID})">🗑️</span></li>`;
    const ul=document.getElementById("taskList");
    ul.innerHTML+=task;
    taskID++;
}
function deleteTask(id){
    document.getElementById(id).remove();
    tasks.pop();
    updateNumber();
}
function updateNumber(){
    document.getElementById("amountTasks").innerHTML=tasks.length;
}

function init(){
    console.log("Init");
    updateNumber();
}
window.onload=init;