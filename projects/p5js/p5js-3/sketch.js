/*
 * @name Mouse 2D
 * @description Moving the mouse changes the position and
 * size of each box.
 */
function setup() {
  createCanvas(1400, 900);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(0);
  fill(255, 255, 255);
  rect(mouseX, height / 2, mouseY / 2 + 10, mouseY / 2 + 10);
  fill(192, 192, 192);
  let inverseX = width - mouseX;
  let inverseY = height - mouseY;
  rect(inverseX, height / 2, inverseY / 2 + 10, inverseY / 2 + 10);
}
