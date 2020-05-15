const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var rain;

function preload(){
  
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  rain = new Rain(random(10, 790), 0);
}

function draw() {
  background("black"); 
  
  rain.display();

  drawSprites();
}
