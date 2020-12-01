
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground1 = new ground(0, 180, 10000, 10)
	 ball1 = new ball(100, 165, 25);
box1 = new box(500, 165, 150, 20)
box2 = new box(425, 125, 20, 100)
box3 = new box(575, 125, 20, 100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball1.display();
  ground1.display();
  box1.display();
  box2.display();
box3.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body, ball1	.body.position,{x:85, y:-85})
	}
}

