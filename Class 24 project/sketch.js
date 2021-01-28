
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbin1,dustbin2,dustbin3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(600,675); 
	ground=new Ground(400,690,1400,10);
	paper=new Paper(50,300,70);
	Engine.run(engine);
  
}


function draw() {
	
  background(0);
  dustbin1.display();
  ground.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
if (keyCode === 38){
Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-85})
}
}

