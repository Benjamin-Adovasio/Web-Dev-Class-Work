let sceneArray = ['Scene 2','Scene 3'] ;
array_str = JSON.stringify(sceneArray);
setCookie("sceneArray",array_str, 5);
let sceneCount = 1;

function addScene() {
        sceneCount++;
        let newScene = "Scene " + sceneCount;
        sceneArray.push(newScene);
        setCookie("sceneArray",array_str, 5);
}

sceneArray = getCookie("sceneArray");

for (i=0; i<sceneArray.length; i++){
        sceneCount++;
        var ul = document.getElementById("heading");
        var li = document.createElement("li");
        var href = document.createElement("a");
        href.appendChild(document.createTextNode(sceneArray[(sceneCount)-2]));
        href.setAttribute("href", sceneCount+".html")
        li.setAttribute("class", "scenes");
        li.setAttribute("id", "scene" + sceneCount); 
        li.appendChild(href);
        ul.appendChild(li);
}
if((window.location.pathname.split("/").pop().slice(0,-5)) == "index"){
        console.log("index.html");
}
else if((window.location.pathname.split("/").pop().slice(0,-5)) == "options"){
        console.log("options.html");
        for(i=0; i<sceneArray.length; i++){
                var tbodyRef = document.getElementById('sceneList').getElementsByTagName('tbody')[0];
                var newRow = tbodyRef.insertRow();
                var newCell = newRow.insertCell();
                newText = document.createElement("Input");
                newText.setAttribute("type", "text");
                newText.setAttribute("placeholder", sceneArray[i]);
                newCell.appendChild(newText);
        }
        var tbodyRef = document.getElementById('sceneList').getElementsByTagName('tbody')[0];
                var newRow = tbodyRef.insertRow();
                var newCell = newRow.insertCell();
                newText = document.createElement("Input");
                newText.setAttribute("type", "button");
                newText.setAttribute("value", "Add Scene");
                newText.setAttribute("onclick", "addScene()");
                newCell.appendChild(newText);
}
else{
document.getElementById("scene" + window.location.pathname.split("/").pop().slice(0,-5)).setAttribute("class", "active");
}

function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
      
function getCookie(cname) {
let name = cname + "=";
let ca = document.cookie.split(';');
for(let i = 0; i < ca.length; i++) {
let c = ca[i];
while (c.charAt(0) == ' ') {
c = c.substring(1);
}
if (c.indexOf(name) == 0) {
return c.substring(name.length, c.length);
}
}
return "";
}