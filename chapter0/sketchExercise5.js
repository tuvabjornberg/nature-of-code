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
  }

  show() {
    stroke(0);
    point(this.x, this.y);
  }

  step() {
    let xstep = 1 * randomGaussian();
    let ystep = 1 * randomGaussian();
    // let xstep = randomGaussian(0, 1);
    // let ystep = randomGaussian(0, 1);

    this.x += xstep;
    this.y += ystep;
  }
}
