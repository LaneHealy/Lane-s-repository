// var sound1;
// var sound2;
// function preload() {
// sound1 = loadSound('sound/Scream.wav');
// sound2 = loadSound('sound/Wrong.wav');
// }


function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  };

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  };

// this is for rwhen you would normally die, I says "you done messed up a-a-ron!"
  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('you done messed up a-a-ron!');
        textSize(30);
        fill(255,0,0);
        text("Game Over!",300, 400);
        //sound2.setVolume(0.1);
        //sound2.play();
        this.total = 0;
        this.tail = [];
      }
    }
  };

// this would be for when you "eat" the food, it adds a block to the snek.
  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length-1; i++) {
        this.tail[i] = this.tail[i+1];
    }
    }
    this.tail[this.total-1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed*nu;
    this.y = this.y + this.yspeed*nu;

// makes sure the snake doesn't leave the play area.
    this.x = constrain(this.x, 0, width-nu);
    this.y = constrain(this.y, 0, height-nu);
  };

  this.show = function() {

    fill(134);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, nu, nu);
    }
    fill(134);
    rect(this.x, this.y, nu, nu);
  };
}
