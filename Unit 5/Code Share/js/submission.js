submissionCounter = 0;
if (localStorage.length % 4 === 0) {
    if(localStorage.length >0 ){
    submissionCounter = localStorage.length / 4 ;
    console.log(submissionCounter);
    for(i = 1; i < submissionCounter + 1; i++ ){
        var tbodyRef = document.getElementById('todoTable').getElementsByTagName('tbody')[0];
        var newRow = tbodyRef.insertRow();
        var newCell = newRow.insertCell();
        var newCell2 = newRow.insertCell();
        var newCell3 = newRow.insertCell();
        var newCell4 = newRow.insertCell();
        var newText = document.createTextNode("Item ID: " + localStorage.getItem("ID: " + i + " - Item ID:"));
        newCell.appendChild(newText);
        var newText2 = document.createTextNode("Name: " + localStorage.getItem("ID: " + i + " - Name:"));
        newCell2.appendChild(newText2);
        var newText3 = document.createTextNode("Task: " + localStorage.getItem("ID: " + i + " - Task:"));
        newCell3.appendChild(newText3);
        var newText4 = document.createTextNode("Priorty: " + localStorage.getItem("ID: " + i + " - Priority:"));
        newCell4.appendChild(newText4);
    }
    }
}
function submission(){
    submissionCounter ++;
    localStorage.setItem("ID: " + submissionCounter + " - Item ID:", submissionCounter);
    localStorage.setItem("ID: " + submissionCounter + " - Name:", document.getElementById('name').value);
    localStorage.setItem("ID: " + submissionCounter + " - Task:", document.getElementById('content').value);
    if(document.getElementById('category1').checked){
        localStorage.setItem("ID: " + submissionCounter + " - Priority:", "High");
    }
    else {
        localStorage.setItem("ID: " + submissionCounter + " - Priority:", "Low");
    }
    var tbodyRef = document.getElementById('todoTable').getElementsByTagName('tbody')[0];
    var newRow = tbodyRef.insertRow();
    var newCell = newRow.insertCell();
    var newCell2 = newRow.insertCell();
    var newCell3 = newRow.insertCell();
    var newCell4 = newRow.insertCell();
    var newCell5 = newRow.insertCell();
    var newText = document.createTextNode("Item ID: " + localStorage.getItem("ID: " + submissionCounter + " - Item ID:"));
    newCell.appendChild(newText);
    var newText2 = document.createTextNode("Name: " + localStorage.getItem("ID: " + submissionCounter + " - Name:"));
    newCell2.appendChild(newText2);
    var newText3 = document.createTextNode("Task: " + localStorage.getItem("ID: " + submissionCounter + " - Task:"));
    newCell3.appendChild(newText3);
    var newText4 = document.createTextNode("Priorty: " + localStorage.getItem("ID: " + submissionCounter + " - Priority:"));
    newCell4.appendChild(newText4);
    var newText5 = document.createElement("button");
    newText5.innerHTML = "test";
    newText5.onclick = function(){
        newRow.remove();
        localStorage.removeItem("ID: " + submissionCounter + " - Item ID:");
        localStorage.removeItem("ID: " + submissionCounter + " - Name:");
        localStorage.removeItem("ID: " + submissionCounter + " - Task:");

    };
    newCell5.appendChild(newText5);
    document.getElementById('content').value="";
    document.getElementById('content').placeholder="e.g. Clean Room";
    for(var i=0;i<document.getElementsByName("category").length;i++){
        document.getElementsByName("category")[i].checked = false;
    }
}

function deleteElement(){
    console.log("test");
}