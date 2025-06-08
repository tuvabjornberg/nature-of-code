let sliderSpread;
let sliderSize;
let sliderSizeSpread;
let sliderHue;
let sliderHueSpread;
let sliderTrans;

function setup() {
  createCanvas(640, 240);
  colorMode(HSB);
  background(97);
  createSliderControls(300);
}

function draw() {
  translate(width / 2, height / 2);
  scale(height / 2);

  let spread = sliderSpread.value();
  let x = randomGaussian(0, spread);
  let y = randomGaussian(0, spread);

  let size = randomGaussian(
    sliderSize.value() / height,
    sliderSizeSpread.value()
  );

  let paintHue = randomGaussian(sliderHue.value(), sliderHueSpread.value());
  let paintSat = randomGaussian(80, 20);
  let paintBright = randomGaussian(80, 20);

  if (paintHue < 0) {
    paintHue += 360;
  } else if (paintHue >= 360) {
    paintHue -= 360;
  }
  if (paintSat > 100) {
    paintSat = 100;
  }
  if (paintBright > 100) {
    paintBright = 100;
  }

  noStroke();
  fill(paintHue, paintSat, paintBright, sliderTrans.value());
  circle(x, y, size);
}

function createSliderControls(ypos) {
  let xpos = 0;

  cpTitle = createP("Random Gauss Paint Splatter Simulation");
  cpTitle.position(xpos, ypos - 40);
  cpTitle.style("font-size", "14pt");
  cpTitle.style("font-weight", "bold");
  xpos += 220;

  clearButton = createButton("Clear");
  clearButton.position(xpos, ypos - 50);
  clearButton.mousePressed(clearButtonClicked);

  // Spread
  xpos = 0;
  spreadTitle = createP("Spread");
  spreadTitle.position(xpos, ypos);
  xpos += 50;

  sliderSpread = createSlider(0, 0.75, 0.25, 0);
  sliderSpread.position(xpos, ypos);
  sliderSpread.size(80);
  xpos += 100;

  // Size
  sizeTitle = createP("Size");
  sizeTitle.position(xpos, ypos);
  xpos += 30;

  sliderSize = createSlider(1, 100, 16);
  sliderSize.position(xpos, ypos);
  sliderSize.size(80);
  xpos += 100;

  // Hue
  hueTitle = createP("Hue");
  hueTitle.position(xpos, ypos);
  xpos += 30;

  sliderHue = createSlider(0, 360, 180, 0);
  sliderHue.position(xpos, ypos);
  sliderHue.size(80);

  // Transparancy
  xpos = 0;
  ypos += 50;
  transTitle = createP("Transparancy");
  transTitle.position(xpos, ypos);
  xpos += 90;

  sliderTrans = createSlider(0, 1, 0.5, 0);
  sliderTrans.position(xpos, ypos);
  sliderTrans.size(80);
  xpos += 90;

  // Size spread
  sizeSpreadTitle = createP("Size spread");
  sizeSpreadTitle.position(xpos, ypos);
  xpos += 80;

  sliderSizeSpread = createSlider(0, 0.1, 0.05, 0);
  sliderSizeSpread.position(xpos, ypos);
  sliderSizeSpread.size(80);
  xpos += 90;

  // Hue Spread
  hueSpreadTitle = createP("Hue spread");
  hueSpreadTitle.position(xpos, ypos);
  xpos += 80;

  sliderHueSpread = createSlider(0, 100, 50, 0);
  sliderHueSpread.position(xpos, ypos);
  sliderHueSpread.size(80);
  xpos += 100;
}

function clearButtonClicked() {
  background(97);
}
