let v = -1;
let m1 = 1;
let m2 = 100;
let timeSteps = 100;
let b1 = new block(300, 100, m1, 0);
let b2 = new block(600, 100, m2, v);

function update() {
  b1 = new block(300, 100, m1, 0);
  b2 = new block(600, 100, m2, v);
  plotVelocityPhaseSpace();
  plotPositionPhaseSpace();
}

function draw() {
  for (let i = 0; i < timeSteps; i++) {
    b1.update();
    b2.update();
    b1.reverse();
    b2.reverse();
    b1.collide(b2);
  }
}

setInterval(() => draw(), 0);
