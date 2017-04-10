var gael = [];

function setup() {
  createCanvas(1366, 662);
    for  (var i = 0; i < 150; i++){
      gael[i] = new Gael();
    }
}

function draw() {
background(0);
  for (var i = 0; i < gael.length; i++){
    gael[i].move();
    gael[i].display();
  }
}
