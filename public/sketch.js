let socket = io();
let myColor = 'white';

socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);
socket.on('color', setColor);

function setColor(assignedColor){
  myColor = assignedColor;

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

  push();
  textAlign(CENTER);
  textSize(30);
  fill(myColor);
  text('Welcome' + myColor, width/2, height/2);
  pop()
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
