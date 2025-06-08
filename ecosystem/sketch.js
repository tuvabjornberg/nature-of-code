let walker;
let bug;

function setup() {
  createCanvas(800, 500);

  walker = new Walker();
  bug = new Bug();

  background(255);
}

function draw() {
  walker.step();
  walker.show();

  // TODO: The "bug" has a bug, it overwrites the line.
  bug.show();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;

    this.oldx = this.x;
    this.oldy = this.y;

    this.tx = 0;
    this.ty = 10000;
  }

  show() {
    stroke(0);
    line(this.oldx, this.oldy, this.x, this.y);
    this.oldx = this.x;
    this.oldy = this.y;
  }

  step() {
    this.x += map(noise(this.tx), 0, 1, -1, 1);
    this.y += map(noise(this.ty), 0, 1, -1, 1);

    this.tx += 0.01;
    this.ty += 0.01;
  }
}

class Bug {
  constructor() {}

  show() {
    stroke(0);
    fill(255);
    circle(walker.x, walker.y, 20);
    triangle(
      walker.x + 2,
      walker.y - 5,
      walker.x - 5,
      walker.y - 30,
      walker.x - 20,
      walker.y - 20
    );
    fill(255);
    ellipse(walker.x + 6, walker.y - 4, 10, 11);
    fill(0);
    ellipse(walker.x + 7, walker.y - 4, 5, 7);
    noFill();
    arc(walker.x, walker.y + 10, 20, 20, PI, PI + QUARTER_PI);
    arc(walker.x + 2, walker.y + 12, 20, 20, PI, PI + QUARTER_PI);
  }
}
