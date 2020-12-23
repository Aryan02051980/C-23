const Engine= Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,mybody,world;
var Box1;
var Box2;
var ground;

function setup() {
  createCanvas(400,600);
engine=Engine.create();
world=engine.world;
Box1=new Box(240,100,50,50);
Box2=new Box(200,200,50,50);
ground=new Ground(200,400,400,10)
  
}

function draw() {
  background(0);
  Engine.update(engine);
  Box1.display();
  Box2.display();
  ground.display();
}
