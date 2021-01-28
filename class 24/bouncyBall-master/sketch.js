const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200, 300, 50, 50); //new = new object
    box2 = new Box(200, 100, 50, 100);
    ground=new Ground(200,390,400,10);
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
}


/*
Object Oriented Programming (OOP)
- Game components are looked at like real world objects
- Objects have
            - Properties
            - Functions
- Class - Design/Blueprint for an object before it is created
*/i 