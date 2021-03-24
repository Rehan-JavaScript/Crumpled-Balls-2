
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(20,20,30,30)
	dustbin = new Dustbin(500,530,100,140)
	ground = Bodies.rectangle(400,600,800,40,{isStatic:true})
    World.add(world,ground)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  dustbin.display()
  rect(ground.position.x,ground.position.y,800,10)
  drawSprites();
 
}

function keyPressed() {
	if (keyCode=== UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-55})
	}
}

