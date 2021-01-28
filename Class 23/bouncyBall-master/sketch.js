const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,ground;
var piggy1,log1, log2, log3, log4, piggy2;
var box3, box4, box5;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    piggy1= new Piggy(810,350)
    piggy2= new Piggy(810,220)
    box1 = new Box(700, 320, 70, 70); //new = new object
    box2 = new Box(920, 320, 70, 70);
    box3 = new Box(700, 240, 70, 70); //new = new object
    box4 = new Box(920, 240, 70, 70);
    ground=new Ground(600,390,1200,20);
    log1= new Log(810,260,300,PI/2);
    log2= new Log(810,180,300,PI/2);
    log3= new Log(760,120,150,PI/7);
    log4= new Log(870,120,150,-PI/7);
    box5 = new Box(810, 160, 70, 70); //new = new object
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    piggy1.display();
    log2.display();
    box5.display();
    piggy2.display();
    log1.display();
    log3.display();
    log4.display();
}


/*
Object Oriented Programming (OOP)
- Game components are looked at like real world objects
- Objects have
            - Properties
            - Functions
- Class - Design/Blueprint for an object before it is created


Degrees - measure of angle
Radians - more accurate measure of angle

pi = 22/7

0-360 deg ----- 0 - 2pi rad
0 deg = 0 rad
360 deg = 2pi rad
180 deg = pi rad
90 deg = pi/2 rad
60 deg = pi/3 rad
45 deg = pi/4 rad
30 deg = pi/6 rad
*/