function setup() {
  createCanvas(200, 200);
}

function draw() {
  background("aqua");

  //when mouse button is pressed, circles turn black
  if (mouseIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }

  //white circles drawn at mouse position
  circle(mouseX, mouseY, 100);
}
