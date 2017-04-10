var location1 = 10;
var location2 = 10;


function setup() {
createCanvas(windowWidth, windowHeight);
bakground(18, 82, 190);



}

function draw() {
var returnLocation = randomTick(location1, location2);
console.log(returnLocation);
background(10, 82, 190, 15);
location1 = returnLocation(0);
location2 = returnLocation(1);


}


  function randomStick(x1, y1);

  var x1
  var y1
