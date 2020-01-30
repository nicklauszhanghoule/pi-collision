let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth-15;
let ctx = canvas.getContext("2d");

//Add timer
//Add inputs for masses
//Add sound
//Distance?

//graph
//chart.js
//pusher

let v = -0.005;
let m1 = 1;
let m2 = 100;
let timeSteps = 100;
let s1 = 70 + (Math.log(m1)*3);
let s2 = 70 + (Math.log(m2)*3);
let b1 = new block(canvas, 300, (canvas.height -20) - s1 + 50, 100, m1, 0);
let b2 = new block(canvas, 600, (canvas.height -20) - s2 + 50, 100, m2, v);

function drawCollision() {
  ctx.font = "20px Calibri";
  ctx.fillStyle = '#000000';
  ctx.textAlign = "left";
  ctx.fillText("Collisions: " + b1.collisions, 20, 30);
}

function draw(){
  for(let i=0; i < timeSteps; i++){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    b1.drawBlockOne(ctx);
    b2.drawBlockTwo(ctx);
    b1.update();
    b2.update();
    b1.reverse();
    b2.reverse();
    b1.collide(b2);
    drawCollision();
  }
}
setInterval(()=>draw(), 0);