function addStudent(){
    let userName = prompt("Enter student name");
    let fsdi101= Number(prompt("Enter your calification of FSDI 101"));
    let fsdi102 = Number (prompt("Enter your calification of FSDI 102"));
    let gpa = (fsdi101+fsdi102)/2;
    
    document.getElementById("text").innerHTML+=`
        <h4>Welcome ${userName}</h4>
        <h5>Califications</5>
        <p>FSDI-101: ${fsdi101}</p>
        <p>FSDI-102: ${fsdi102}</p>
        <p>GPA: ${gpa} </p>
    `;
}

