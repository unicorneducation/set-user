var checkbox;
var emotor;
var federung;
var carbon;
var stereo;

var boxColor = 255;

function setup() {
  createCanvas(400, 600);

  emotor = createCheckbox(' E-Motor', false);
  federung = createCheckbox(' Vollfederung', false);
  carbon = createCheckbox(' Carbon', false);
  stereo = createCheckbox(' Stereo Anlage', false);
}

function draw() {
  background(200);

  noStroke();
  fill(boxColor)
  rect(100, 250, 200, 100);

  if (emotor.checked()) {
    drawEmotor()
  }

  if (federung.checked()) {
    drawFederung()
  }
  if (carbon.checked()) {
    drawCarbon()
  } else {
    boxColor = 255;
  }

  if (stereo.checked()) {
    drawStereo()
  }
}

function drawEmotor() {
  fill(70);
  ellipse(100, 450, 50, 50);
  ellipse(300, 450, 50, 50);
}

function drawFederung() {
  stroke(0)
  strokeWeight(7)
  line(100, 350, 300, 450);
  line(300, 350, 100, 450);
}

function drawCarbon() {
  boxColor = 100;
}

function drawStereo() {
  noStroke();
  fill(70)
  rect(120, 265, 30, 70);
  fill(30)
  rect(150, 265, 10, 70);
  fill(200);
  ellipse(155, 300, 5, 40)
}