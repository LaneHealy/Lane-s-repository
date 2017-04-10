function setup() {

    console.log("hello world!");

    createCanvas(860, 660);
      background(34, 240, 167);

    //the body
      fill(0, 0, 0);
    quad(230, 250, 230, 450, 320, 450, 320, 250);

    //the legs
      fill(0, 0, 0);
    quad(230, 450, 230, 600, 250, 600, 250, 450);
    quad(300, 450, 300, 600, 320, 600, 320, 450);

    // the white stipe on the body
      fill(255, 255, 255);
    quad(270, 250, 270, 450, 280, 450, 280, 250);

    //circle used as the head
      fill(236, 229, 179);
    ellipse(275, 175, 200, 200);

    //circles used as the eyes
      fill(34, 20, 16);
    ellipse(250, 150, 40, 40);
    ellipse(300, 150, 40, 40);

    //circles used as the outer eyes
      fill(255,255,255);
    ellipse(250, 150, 30, 30);
    ellipse(300, 150, 30, 30);
    //red triangle
      fill(255,10,50);
    triangle(275, 0, 190, 123, 360, 123);

    //circles used a the inner eyes
      fill(0,0,0);
    ellipse(250, 150, 15, 15);
    ellipse(300, 150, 15, 15);

    //the mouth
      fill(34, 20, 16);
    line(225, 200, 325, 200);

    //the nose
    triangle(275, 170, 275, 190, 290, 190);

    fill(0, 0, 0);
    quad(230, 300, 220, 310, 90, 200, 100, 190);
    quad(330, 310, 320, 300, 470, 190, 480, 200);

    //the bowtie
    fill(255, 40, 50);
    quad(200, 225, 200, 325, 350, 225, 350, 325);

      fill(0, 0, 0);
    text("My name is jeff.  I'm a vampire!", 20, 20, 200, 20);


}

function draw() {

}
