//NAMESPACING
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world; //tuning engine & world according to what we want
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = { isStatic: true };
  //pass options to the ground --> change properties
  ground = Bodies.rectangle(200, 390, 400, 20, options);
  World.add(world, ground);

  var balloptions={restitution:3};
  
  ball=Bodies.circle(200,100,20,balloptions);
  World.add(world,ball);

 console.log(ball)
}

function draw() {
  background(0);  
  Engine.update(engine);
  //takes the position at the centre of the shape
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}

/*
PHYSICS ENGINE
  -box2d
  -matter
  -p2
MATTER LIBRARY

1. Engine - Universe - Which follows all the laws of physics
          - tune this engine according to what we want
          - Matter.Engine
2. World  - Physical world where objects can be added
          - Matter.World
3. Bodies - Objects in the world
          - Matter.Bodies

NameSpacing - nicknaming

ellipse(x, y, r1, r2);
*/