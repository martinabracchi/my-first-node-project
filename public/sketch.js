let socket = io();
let myColor = 'white';

socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);
socket.on('color', setColor);

function setColor(assignedColor){
  myColor = assignedColor;
  text('Welcome' + assignedColor, width/2, height/2);
}

function newConnection() {
  console.log("your id: " + socket.id);
}

function drawOtherMouse(data) {
  push();
  fill(data.color);
  ellipse(data.x, data.y, 20);
  pop();
}

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background("purple");
  // put setup code here
}

function mouseMoved() {
  push();
  fill(myColor);
  ellipse(mouseX, mouseY, 20);
  pop();

  let message = {
    x: mouseX,
    y: mouseY,
    color: myColor,
  };

  socket.emit("mouse", message)
}
