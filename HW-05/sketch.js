  var bgColor;
  var centerX, centerY;
  var pos1x = 500, pos1y = 300;
  var pos2x = 200, pos2y = 400;
  var pos3x = 0, pos3y = 0;
  var multMax = 0.5;
  var multDelta;
  var mult;
  var redFill = 255;
  var alphaAmt = 100;
  var alphaNoise;

function setup() {

  bgColor = color(40, 167, 200);
  createCanvas(windowWidth, windowHeight);
  background(bgColor);

  pos1x = random(width);
  pos1y = random(height);
  pos2x = pos1x + 10;
  pos2y = pos1y - 10;



}

function draw() {



  //rectangle stuff
  centerX = width * 2;
  centerY = height * 3;


  multDelta = noise(0.1 * frameCount + pow(2, 8));
  multDelta = map(multDelta, 0, 1, -0.0005, 0.0005 );
  multMax = constrain(multMax + multDelta, 0.005, 0.002);
  mult = random(-multMax, multMax);
  pos3x = abs(((width * mult) + pos2x) % width);
  mult = random(-multMax, multMax);
  pos3y = abs(((height * mult) + pos2y) % height);


  mult = noise(frameCount * 0.005) * 255;
  redFill = constrain(mult, 0, 255);

  noStroke();
  alphaNoise = noise(0.1 * frameCount + 100);
  alphaNoise = map(alphaNoise, 0, 1, -100, 100);
  alphaAmt += alphaNoise;
  alphaAmt = constrain(alphaAmt, 10, 200);
  fill(redFill, 255-redFill, 10, 20);

  rect(pos1x, pos1y, pos2x, pos2y, pos3x, pos3y);

  pos1x = pos2x;
  pos1y = pos2y;
  pos2x = pos3x;
  pos2y = pos3y;


}
