let walker;

function setup() {
  createCanvas(800, 500);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.step();
  walker.show();
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
