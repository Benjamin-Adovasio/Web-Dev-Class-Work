
    submissionCounter = 0;
    if (localStorage.length % 4 === 0) {
        if(localStorage.length >0 ){
        submissionCounter = localStorage.length / 4 ;
        console.log(submissionCounter);
        for(i = 1; i < submissionCounter + 1; i++ ){
            var tbodyRef = document.getElementById('todoTableReadOnly').getElementsByTagName('tbody')[0];
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

    setInterval(function(){
        location.reload();
      }, 5000);