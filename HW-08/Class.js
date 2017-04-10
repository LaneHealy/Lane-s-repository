  function Gael(){
    this.x = random(0, 1366);
    this.y = random(0, 662);
    this.size = random(30, 50);
    this.r = random(10, 200);
    this.g = random(10, 200);
    this.b = random(10, 200);
    this.speed = random(0.5, 20);


    this.display = function() {

      // this.c = random(0, 360);
      // colorMode(HSB, this.c, 100, 2000, 1);
      // fill(this.c);
      ellipse(this.x, this.y, this.size, this.size);
        fill(this.r, this.g, this.b);
    };

    this.move = function() {
      this.x = this.x - this.speed;
      if (this.x <= 0 - this.size){
        this.x = width + this.size;
      }
      this.y = this.y - this.speed;
      if (this.y <= 0 - this.size){
        this.y = height + this.size;
      }
    };
}
