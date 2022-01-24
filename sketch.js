const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var rightWall, leftWall, topWall, bottomWall;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  bottomWall = new Wall(200, 390, 400, 20);
  rightWall = new Wall(390, 200, 20, 400);
  leftWall = new Wall(10, 200, 20, 400);
  topWall = new Wall(200, 10, 400, 20);
  
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  rightWall.show();
  leftWall.show();
  topWall.show();
  bottomWall.show();
}

