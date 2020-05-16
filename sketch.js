const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var rain, rain1, rain2;
var b = [];

function preload(){
  
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  
  
}

function draw() {
  background("black"); 
  Engine.update(engine);
  
  rain = new Rain(random(10, 790), 0);
  b.push(rain);
  for(var i = 0; i < b.length; i++)
  {
    b[i].display();
  }

  drawSprites();
}
