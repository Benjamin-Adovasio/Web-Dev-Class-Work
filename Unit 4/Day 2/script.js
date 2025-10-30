function program1(inputString){
    document.getElementById("out1").innerHTML="";
    let inputArray = Array.from(inputString);
    let regex = /s/gm;
    let counter = 0;
    for (i = 0; i < inputArray.length; i++) {
        if (regex.test(inputArray[i])) {
            counter++;
        }
        else {
            console.log("not an s");
        }
    }
    document.getElementById("out1").innerHTML=counter;
}
function program2(inputString){
    document.getElementById("out2").innerHTML="";
    let inputArray = Array.from(inputString);
    for (i = 0; i < inputArray.length; i++) {
        if (i % 2 == 0) {
            console.log("odd");
            let outputCharacter = inputArray[i].toUpperCase();
            let existingText = document.getElementById("out2").textContent;
            document.getElementById("out2").innerHTML= existingText + outputCharacter;
        }
        else {
            console.log("not an s");
            let outputCharacter = inputArray[i].toLowerCase();
            let existingText = document.getElementById("out2").textContent;
            document.getElementById("out2").innerHTML= existingText + outputCharacter;
        }
    }

    // document.getElementById("out1").innerHTML= localStorage;
}