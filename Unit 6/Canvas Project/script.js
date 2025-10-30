let canvas=document.querySelector("canvas");
let context=canvas.getContext("2d");
canvas.height=innerWidth-1000;
canvas.width=innerWidth-750;
canvas.style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:7px solid gold";
var ballRadius = 30;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 1;
var dy = -1;
var ballColor = "#0095DD";
var ballRadius2 = 25;
var x2 = (canvas.width/2)-80;
var y2 = (canvas.height-30)-80;
var dx2 = -1;
var dy2 = -1;
var ballColor2 = "#32a855";
var ballRadius3 = 25;
var x3 = (canvas.width/2)-180;
var y3 = (canvas.height-30)-180;
var dx3 = 1;
var dy3 = 1;
var ballColor3 = "#dd0034";
var ballRadius4= 10;
var x4 = (canvas.width/2)+80;
var y4 = (canvas.height-30)-80;
var dx4 = -1;
var dy4 = 1;
var ballColor4 = "#8132a8";
var ballRadius5= 10;
var x5 = (canvas.width/2)+40;
var y5 = (canvas.height-30)-80;
var dx5 = -1;
var dy5 = 1;
var ballColor5 = "#32a2a8";
var ballRadius6= 10;
var x6 = (canvas.width/2)+180;
var y6 = (canvas.height-30)-80;
var dx6 = 1;
var dy6 = 1;
var ballColor6 = "#a89e32";
var ballRadius7= 10;
var x7 = (canvas.width/2)-30;
var y7 = (canvas.height-30)-50;
var dx7 = -1;
var dy7 = -1;
var ballColor7 = "#a86f32";

function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    draw1(); //Light Blue
    draw2(); //Light Green
    draw3(); //Red
    draw4(); //Purple
    draw5(); //Green/Blue
    draw6(); //Dark Yellow
    draw7(); //Dark Orange
}
function draw1() {
    if(collisionDetection(1)=="xy"){
        dx=-dx;
        dy=-dy;
        console.log("1XY");
        ballColor = changeColor();
    }
    else{
        if(collisionDetection(1)=="y"){
            dy=-dy;
            console.log("1Y");
            ballColor = changeColor();
        }
        if(collisionDetection(1)=="x"){
            dx=-dx;
            console.log("1X");
            ballColor = changeColor();
        } 
    }
    x+=dx;
    y+=dy;
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI*2);
    context.fillStyle = ballColor;
    context.fill();
    context.closePath();
}
function draw2() {
    if(collisionDetection(2)=="xy"){
        dx2=-dx2;
        dy2=-dy2;
        console.log("2XY");
        ballColor2 = changeColor();
    }
    else{
        if(collisionDetection(2)=="y"){
            dy2=-dy2;
            console.log("2Y");
            ballColor2 = changeColor();
        }
        if(collisionDetection(2)=="x"){
            dx2=-dx2;
            console.log("2X");
            ballColor2 = changeColor();
        } 
    }
    x2+=dx2;
    y2+=dy2;
    context.beginPath();
    context.arc(x2, y2, ballRadius2, 0, Math.PI*2);
    context.fillStyle = ballColor2;
    context.fill();
    context.closePath();
}
function draw3() {
    if(collisionDetection(3)=="xy"){
        dx3=-dx3;
        dy3=-dy3;
        console.log("3XY");
        ballColor3 = changeColor();
    }
    else{
        if(collisionDetection(3)=="y"){
            dy3=-dy3;
            console.log("3Y");
            ballColor3 = changeColor();
        }
        if(collisionDetection(3)=="x"){
            dx3=-dx3;
            console.log("3X");
            ballColor3 = changeColor();
        } 
    }
    x3+=dx3;
    y3+=dy3;
    context.beginPath();
    context.arc(x3, y3, ballRadius3, 0, Math.PI*2);
    context.fillStyle = ballColor3;
    context.fill();
    context.closePath();
}
function draw4() {
    if(collisionDetection(4)=="xy"){
        dx4=-dx4;
        dy4=-dy4;
        console.log("4XY");
        ballColor4 = changeColor();
    }
    else{
        if(collisionDetection(4)=="y"){
            dy4=-dy4;
            console.log("4Y");
            ballColor4 = changeColor();
        }
        if(collisionDetection(4)=="x"){
            dx4=-dx4;
            console.log("4X");
            ballColor4 = changeColor();
        } 
    }
    x4+=dx4;
    y4+=dy4;
    context.beginPath();
    context.arc(x4, y4, ballRadius4, 0, Math.PI*2);
    context.fillStyle = ballColor4;
    context.fill();
    context.closePath();
}
function draw5() {
    if(collisionDetection(5)=="xy"){
        dx5=-dx5;
        dy5=-dy5;
        console.log("5XY");
        ballColor5 = changeColor();
    }
    else{
        if(collisionDetection(5)=="y"){
            dy5=-dy5;
            console.log("5Y");
            ballColor5 = changeColor();
        }
        if(collisionDetection(5)=="x"){
            dx5=-dx5;
            console.log("5X");
            ballColor5 = changeColor();
        } 
    }
    x5+=dx5;
    y5+=dy5;
    context.beginPath();
    context.arc(x5, y5, ballRadius5, 0, Math.PI*2);
    context.fillStyle = ballColor5;
    context.fill();
    context.closePath();
}
function draw6() {
    if(collisionDetection(6)=="xy"){
        dx6=-dx6;
        dy6=-dy6;
        console.log("6XY");
        ballColor6 = changeColor();
    }
    else{
        if(collisionDetection(6)=="y"){
            dy6=-dy6;
            console.log("6Y");
            ballColor6 = changeColor();
        }
        if(collisionDetection(6)=="x"){
            dx6=-dx6;
            console.log("6X");
            ballColor6 = changeColor();
        } 
    }
    x6+=dx6;
    y6+=dy6;
    context.beginPath();
    context.arc(x6, y6, ballRadius6, 0, Math.PI*2);
    context.fillStyle = ballColor6;
    context.fill();
    context.closePath();
}
function draw7() {
    if(collisionDetection(7)=="xy"){
        dx7=-dx7;
        dy7=-dy7;
        console.log("7XY");
        ballColor7 = changeColor();
    }
    else{
        if(collisionDetection(7)=="y"){
            dy7=-dy7;
            console.log("7Y");
            ballColor7 = changeColor();
        }
        if(collisionDetection(7)=="x"){
            dx7=-dx7;
            console.log("7X");
            ballColor7 = changeColor();
        } 
    }
    x7+=dx7;
    y7+=dy7;
    context.beginPath();
    context.arc(x7, y7, ballRadius7, 0, Math.PI*2);
    context.fillStyle = ballColor7;
    context.fill();
    context.closePath();
}
setInterval(draw, 5);

function collisionDetection(number){
    if (number == 1){
        if(x+dx>canvas.width-ballRadius||x+dx<ballRadius){
            return "x";
        }
        else if(y+dy>canvas.height-ballRadius || y+dy< ballRadius) {
            return "y";
        }
        else if(Math.sqrt(((x - x2)*(x-x2))+((y-y2)*(y-y2))) <= (ballRadius+ballRadius2)){
            return "xy";
        }
        else if(Math.sqrt(((x - x3)*(x-x3))+((y-y3)*(y-y3))) <= (ballRadius+ballRadius3)){
            return "xy";
        }
        else if(Math.sqrt(((x-x4)*(x-x4)+(y-y4)*(y-y4))) <= (ballRadius+ballRadius4)){
            return "xy";
        }
        else if(Math.sqrt(((x-x5)*(x-x5)+(y-y5)*(y-y5))) <= (ballRadius+ballRadius5)){
            return "xy";
        }
        else if(Math.sqrt(((x-x6)*(x-x6)+(y-y6)*(y-y6))) <= (ballRadius+ballRadius6)){
            return "xy";
        }
        else if(Math.sqrt(((x-x7)*(x-x7)+(y-y7)*(y-y7))) <= (ballRadius+ballRadius7)){
            return "xy";
        }
        else{
            return false;
        }
    }
    else if (number == 2){
        if(x2+dx2>canvas.width-ballRadius2||x2+dx2<ballRadius2){
            return "x";
        }
        else if(y2+dx2>canvas.height-ballRadius2 || y2+dy2< ballRadius2) {
            return "y";
        }
        else if(Math.sqrt(((x2 - x)*(x2-x))+((y2-y)*(y2-y))) <= (ballRadius2+ballRadius)){
            return "xy";
        }
        else if(Math.sqrt(((x2 - x3)*(x2-x3))+((y2-y3)*(y2-y3))) <= (ballRadius2+ballRadius3)){
            return "xy";
        }
        else if(Math.sqrt(((x2-x4)*(x2-x4)+(y2-y4)*(y2-y4))) <= (ballRadius2+ballRadius4)){
            return "xy";
        }
        else if(Math.sqrt(((x2-x5)*(x2-x5)+(y2-y5)*(y2-y5))) <= (ballRadius2+ballRadius5)){
            return "xy";
        }
        else if(Math.sqrt(((x2-x6)*(x2-x6)+(y2-y6)*(y2-y6))) <= (ballRadius2+ballRadius6)){
            return "xy";
        }
        else if(Math.sqrt(((x2-x7)*(x2-x7)+(y2-y7)*(y2-y7))) <= (ballRadius2+ballRadius7)){
            return "xy";
        }
        else{
            return false;
        }
    }
    else if (number == 3){
        if(x3+dx3>canvas.width-ballRadius3||x3+dx3<ballRadius3){
            return "x";
        }
        else if(y3+dy3>canvas.height-ballRadius3 || y3+dy3< ballRadius3) {
            return "y";
        }
        else if(Math.sqrt(((x3 - x)*(x3-x))+((y3-y)*(y3-y))) <= (ballRadius3+ballRadius)){
            return "xy";
        }
        else if(Math.sqrt(((x3 - x2)*(x3-x2))+((y3-y2)*(y3-y2))) <= (ballRadius3+ballRadius2)){
            return "xy";
        }
        else if(Math.sqrt(((x3-x4)*(x3-x4)+(y3-y4)*(y3-y4))) <= (ballRadius3+ballRadius4)){
            return "xy";
        }
        else if(Math.sqrt(((x3-x5)*(x3-x5)+(y3-y5)*(y3-y5))) <= (ballRadius3+ballRadius5)){
            return "xy";
        }
        else if(Math.sqrt(((x3-x6)*(x3-x6)+(y3-y6)*(y3-y6))) <= (ballRadius3+ballRadius6)){
            return "xy";
        }
        else if(Math.sqrt(((x3-x7)*(x3-x7)+(y3-y7)*(y3-y7))) <= (ballRadius3+ballRadius7)){
            return "xy";
        }
        else{
            return false;
        }
    }
    else if (number == 4){
        if(x4+dx4>canvas.width-ballRadius4||x4+dx4<ballRadius4){
            return "x";
        }
        else if(y4+dy4>canvas.height-ballRadius4 || y4+dy4< ballRadius4) {
            return "y";
        }
        else if(Math.sqrt(((x4 - x2)*(x4-x2))+((y4-y2)*(y4-y2))) <= (ballRadius4+ballRadius4)){
            return "xy";
        }
        else if(Math.sqrt(((x4 - x3)*(x-x3))+((y4-y3)*(y4-y3))) <= (ballRadius4+ballRadius3)){
            return "xy";
        }
        else if(Math.sqrt(((x4-x)*(x4-x)+(y4-y)*(y4-y))) <= (ballRadius4+ballRadius)){
            return "xy";
        }
        else if(Math.sqrt(((x4-x5)*(x4-x5)+(y4-y5)*(y4-y5))) <= (ballRadius4+ballRadius5)){
            return "xy";
        }
        else if(Math.sqrt(((x4-x6)*(x4-x6)+(y4-y6)*(y4-y6))) <= (ballRadius4+ballRadius6)){
            return "xy";
        }
        else if(Math.sqrt(((x4-x7)*(x4-x7)+(y4-y7)*(y4-y7))) <= (ballRadius4+ballRadius7)){
            return "xy";
        }
        else{
            return false;
        }
    }
    else if (number == 5){
        if(x5+dx5>canvas.width-ballRadius5||x5+dx5<ballRadius5){
            return "x";
        }
        else if(y5+dy5>canvas.height-ballRadius5 || y5+dy5< ballRadius5) {
            return "y";
        }
        else if(Math.sqrt(((x5 - x2)*(x5-x2))+((y5-y2)*(y5-y2))) <= (ballRadius5+ballRadius2)){
            return "xy";
        }
        else if(Math.sqrt(((x5 - x3)*(x5-x3))+((y5-y3)*(y5-y3))) <= (ballRadius5+ballRadius3)){
            return "xy";
        }
        else if(Math.sqrt(((x5-x4)*(x5-x4)+(y5-y4)*(y5-y4))) <= (ballRadius5+ballRadius4)){
            return "xy";
        }
        else if(Math.sqrt(((x5-x)*(x5-x)+(y5-y)*(y5-y))) <= (ballRadius5+ballRadius)){
            return "xy";
        }
        else if(Math.sqrt(((x5-x6)*(x5-x6)+(y5-y6)*(y5-y6))) <= (ballRadius5+ballRadius6)){
            return "xy";
        }
        else if(Math.sqrt(((x5-x7)*(x5-x7)+(y5-y7)*(y5-y7))) <= (ballRadius5+ballRadius7)){
            return "xy";
        }
        else{
            return false;
        }
    }
    else if (number == 6){
        if(x6+dx6>canvas.width-ballRadius6||x6+dx6<ballRadius6){
            return "x";
        }
        else if(y6+dy6>canvas.height-ballRadius6 || y6+dy6< ballRadius6) {
            return "y";
        }
        else if(Math.sqrt(((x6 - x2)*(x6-x2))+((y6-y2)*(y6-y2))) <= (ballRadius6+ballRadius2)){
            return "xy";
        }
        else if(Math.sqrt(((x6 - x3)*(x6-x3))+((y6-y3)*(y6-y3))) <= (ballRadius6+ballRadius3)){
            return "xy";
        }
        else if(Math.sqrt(((x6-x4)*(x6-x4)+(y6-y4)*(y6-y4))) <= (ballRadius6+ballRadius4)){
            return "xy";
        }
        else if(Math.sqrt(((x6-x)*(x6-x)+(y6-y)*(y6-y))) <= (ballRadius6+ballRadius)){
            return "xy";
        }
        else if(Math.sqrt(((x6-x5)*(x6-x5)+(y6-y5)*(y6-y5))) <= (ballRadius6+ballRadius5)){
            return "xy";
        }
        else if(Math.sqrt(((x6-x7)*(x6-x7)+(y6-y7)*(y6-y7))) <= (ballRadius6+ballRadius7)){
            return "xy";
        }
        else{
            return false;
        }
    }
    if (number == 7){
        if(x7+dx7>canvas.width-ballRadius7||x7+dx7<ballRadius7){
            return "x";
        }
        else if(y7+dy7>canvas.height-ballRadius7 || y7+dy7< ballRadius7) {
            return "y";
        }
        else if(Math.sqrt(((x7 - x2)*(x7-x2))+((y7-y2)*(y7-y2))) <= (ballRadius7+ballRadius2)){
            return "xy";
        }
        else if(Math.sqrt(((x7 - x3)*(x7-x3))+((y7-y3)*(y7-y3))) <= (ballRadius7+ballRadius3)){
            return "xy";
        }
        else if(Math.sqrt(((x7-x4)*(x7-x4)+(y7-y4)*(y7-y4))) <= (ballRadius7+ballRadius4)){
            return "xy";
        }
        else if(Math.sqrt(((x7-x5)*(x7-x5)+(y7-y5)*(y7-y5))) <= (ballRadius7+ballRadius5)){
            return "xy";
        }
        else if(Math.sqrt(((x7-x6)*(x7-x6)+(y7-y6)*(y7-y6))) <= (ballRadius7+ballRadius6)){
            return "xy";
        }
        else if(Math.sqrt(((x7-x)*(x7-x)+(y7-y)*(y7-y))) <= (ballRadius7+ballRadius)){
            return "xy";
        }
        else{
            return false;
        }
    }
}
function changeColor(){
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
    console.log(rgb);
    return rgb;
}