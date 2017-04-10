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

  var pos11x = 100, pos11y = 200;
  var pos21x = 400, pos21y = 100;
  var pos31x = 0, pos31y = 0;

function setup() {

  bgColor = color(40, 167, 100);
  createCanvas(windowWidth, windowHeight);
  background(bgColor);

  pos1x = random(width);
  pos1y = random(height);
  pos2x = pos1x + 10;
  pos2y = pos1y - 10;


  pos11x = random(width);
  pos11y = random(height);
  pos21x = pos11x + 10;
  pos21y = pos11y - 10;



}

function draw() {



  //rectangle stuff
  centerX = width * 2;
  centerY = height * 3;


  multDelta = noise(0.1 * frameCount + pow(2, 8));
  multDelta = map(multDelta, 0, 1, -0.005, 0.005 );
  multMax = constrain(multMax + multDelta, 0.05, 0.2);
  mult = random(-multMax, multMax);
  pos3x = abs(((width * mult) + pos2x) % width);
  mult = random(-multMax, multMax);
  pos3y = abs(((height * mult) + pos2y) % height);


  mult = noise(frameCount * 0.05) * 255;
  redFill = constrain(mult, 0, 255);

  noStroke();
  alphaNoise = noise(0.1 * frameCount + 100);
  alphaNoise = map(alphaNoise, 0, 1, -10, 10);
  alphaAmt += alphaNoise;
  alphaAmt = constrain(alphaAmt, 10, 200);
  fill(redFill, 255-redFill, 100, 200);

  rect(pos1x, pos1y, pos2x, pos2y, pos3x, pos3y);

  pos1x = pos2x;
  pos1y = pos2y;
  pos2x = pos3x;
  pos2y = pos3y;






  //triangle stuff
  //cant get it to work like the rectangle
  //only creates one random af triangle
  //none of this is necessary as none of it works as intended :)

  centerX = width * 20;
  centerY = height * 30;


  multDelta = noise(0.001 * frameCount + pow(20, 87));
  multDelta = map(multDelta, 20, 100, -0.5, 0.5 );
  multMax = constrain(multMax + multDelta, 0.0005, 0.002);
  mult = random(-multMax, multMax);
  pos3x = abs(((width * mult) + pos2x) % width);
  mult = random(-multMax, multMax);
  pos3y = abs(((height * mult) + pos2y) % height);


  mult = noise(frameCount * 0.5) * 255;
  redFill = constrain(mult, 0, 255);

  noStroke();
  alphaNoise = noise(0.9 * frameCount + 200);
  alphaNoise = map(alphaNoise, 5, 10, -100, 100);
  alphaAmt += alphaNoise;
  alphaAmt = constrain(alphaAmt, 100, 255);
  fill(redFill, 255-redFill, 10, 255);

  triangle(pos11x, pos11y, pos21x, pos21y, pos31x, pos31y);

  pos11x = pos21x;
  pos11y = pos21y;
  pos21x = pos31x;
  pos21y = pos31y;




}
