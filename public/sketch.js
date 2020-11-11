let socket = io();

socket.on("connect", newConnection);
socket.on("mouseBroadcast", drawOtherMouse);

function newConnection() {
  console.log("your id: " + socket.id);
}

function drawOtherMouse(data) {
  fill("yellow");
  ellipse(data.x, data.y, 10);
}

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background("purple");
  // put setup code here
}

function draw() {
  fill("white");
  ellipse(mouseX, mouseY, 20);

  let message = {
    x: mouseX,
    y: mouseY,
  };

  socket.emit("mouse", message)
}
