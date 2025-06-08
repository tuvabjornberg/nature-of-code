let walker;

function setup() {
  createCanvas(640, 240);
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
    let r = random(1);

    if (r < 0.5) {
      if (r < 0.25) {
        if (this.x < mouseX) {
          this.x++;
        } else {
          this.x--;
        }
      } else {
        if (this.y < mouseY) {
          this.y++;
        } else {
          this.y--;
        }
      }
    } else {
      const choice = floor(random(4));
      switch (choice) {
        case 0:
          this.x++;
          break;
        case 1:
          this.x--;
          break;
        case 2:
          this.y++;
          break;
        case 3:
          this.y--;
          break;
        default:
          break;
      }
    }
  }
}
