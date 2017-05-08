var ssss;
var nu = 30;
// var sound1;
// var sound2;
// function preload() {
// sound1=loadSound('sound/Scream.wav');
// sound2=loadSound('sound/Wrong.wav');
// }

function setup() {

  //this didn't work on the first try so I never touched it afterwards
  // got it! wanted it to be a random color everytime it was eaten but oh well.
  this.r = random(0, 255);
  this.g = random(0, 255);
  this.b = random(0, 255);
  createCanvas(windowWidth, windowHeight);
  ssss = new Snake();
  frameRate(10);
  pickLocation();

}

function pickLocation() {

  var cols = floor(width/nu);
  var rows = floor(height/nu);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(nu);

}

function draw() {

  background(30);
  ssss.death();
  ssss.update();
  ssss.show();
  if (ssss.eat(food)) {
    pickLocation();
  }
// this is the "food."
  fill(this.r, this.g, this.b);
  rect(food.x, food.y, nu, nu);
}
// controls the snake.
function keyPressed() {

  if (keyCode === UP_ARROW) {
    ssss.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    ssss.dir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    ssss.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    ssss.dir(1, 0);
  }
}
