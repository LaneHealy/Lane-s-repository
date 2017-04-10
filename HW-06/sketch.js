var x = 250;
var y = 250;
var z = 50;

var state = false;

function setup() {

  createCanvas(500, 500);

}

function draw() {

  if (state) {

    //supposed to be the change when button is pressed
    Background(200,40,30);

    fill(55,255,0);

    ellipse(random(0, width), random(0, height), 50, 80);

  } else {

    //the regular screen when the button is not pressed.
    background(0);

  }
    textSize(20);

    text("Push Me!",210,210);

  //the button itself
  ellipse(x, y, z, z);

  fill(0,100,250);
}

  //button mechanics
function mousePressed() {

  if (dist(mouseX, mouseY, x, y) < z/2) {
    state = !state;

  }

}
