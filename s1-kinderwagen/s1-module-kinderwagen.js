var checkbox;

function setup() {
  createCanvas(960, 600);
  checkbox = createCheckbox();
  // checkbox.changed(myCheckedEvent);

}

function draw() {
  background(200);

  noStroke();
  rect(100, 100, 200, 100);

  textSize(28);
  text("E-Motor", 800, 100);

}

function myCheckedEvent() {
  // if (this.checked()) {
  //   console.log('Checking!');
  // } else {
  //   console.log('Unchecking!');
  // }
}