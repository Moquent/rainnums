
var rain;
function setup() {
  createCanvas(800,400);

  rain = new Rain(random(10, 790), 0);
}

function draw() {
  background(255,255,255); 
  
  Rain.display();

  drawSprites();
}