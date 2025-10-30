toggleCounter = 1;
toggleHelp();
if((localStorage.length % 4 === 0) && (localStorage.length > 1)) {
  if (confirm('Previous todo-list data was found. Do you want to restore this data?')) {
    console.log('Restored from localStorage');
    new Dismissible(document.querySelector('#dismissible-container')).success('Previous todo-list data was restored.');
  } else {
    console.log('Local Storage cleared');
    localStorage.clear();
  }
}
else if(localStorage.getItem("ID: 1 - Item ID:") == "1"){
  new Dismissible(document.querySelector('#dismissible-container')).error('Previous todo-list data was found but appears to be corrupted. Previous data will not be restored.');
  localStorage.clear();
}
else if(localStorage.length > 0) {
  if (confirm('Local Storage data, unreleated to your todo-list, was found in your cache. This needs to be cleared for the website to function properly.')) {
    console.log('Local Storage cleared');
    localStorage
  } else {
    console.log('Local Storage NOT cleared!');
    console.log('Website may not function properly!');
    new Dismissible(document.querySelector('#dismissible-container')).info('Local storage not cleared, website may not function properly!');
  }
}

function enterKeyPressed(event){
  var key = event.key || event.keyCode;
  if (key === 'Enter' || key === 13) {
    console.log("enter");
    document.getElementById(content.id).focus();
    new Dismissible(document.querySelector('#dismissible-container')).success('Name saved!');
  }
  else
  {
    console.log("not enter");
  }
};

function enterKeyPressedTask(event){
  var key = event.key || event.keyCode;
  if (key === 'Enter' || key === 13) {
    console.log("enter");
    document.getElementById('category1').focus();
  }
  else
  {
    console.log("not enter");
  }
};

function toggleHelp(){
  toggleCounter ++;
  if (toggleCounter % 2 == 0) {
    for (var i = 0; i < document.getElementsByClassName("help").length; i ++) {
      document.getElementsByClassName("help")[i].style.display = 'none';
    }
  } else {
    for (var i = 0; i < document.getElementsByClassName("help").length; i ++) {
      document.getElementsByClassName("help")[i].style.display = 'initial';
    }
  }
}

function todoViewer(choice){
  if (choice == 'popup'){
newwindow=window.open(href='todoOnly.html','name','height=700,width=700');
    if (window.focus) {newwindow.focus()}
    return false;
  }

  else if(choice == 'tab'){
    window.open(href='todoOnly.html');
  }
}