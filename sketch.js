
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pad;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinn = new dustbin(670, 630, 70);
	paperObject=new paper(200,450,40);
	
	
    pad = createSprite(450,400,100,30)
	ground = new Ground(400,650,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbinn.display();
 
 
  
  drawSprites();
 
}

function keyPressed(){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}

