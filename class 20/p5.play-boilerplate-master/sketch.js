var moving, fixed;

function setup() {
  createCanvas(1200,800);
  moving = createSprite(400, 300, 50, 80);
  fixed = createSprite(600, 300, 80, 50);

  moving.debug = true;
  fixed.debug = true;

  moving.velocityX = 5;
  fixed.velocityX = -5;

}

function draw() {
  background(0);  

  //moving.y = mouseY;
  //moving.x = mouseX;

  //DETECTING COLLISION
  if(fixed.x - moving.x < moving.width/2 + fixed.width/2
    && moving.x - fixed.x < moving.width/2 + fixed.width/2
    && fixed.y - moving.y < moving.height/2 + fixed.height/2
    && moving.y - fixed.y < moving.height/2 + fixed.height/2){
    moving.shapeColor = "red";
    fixed.shapeColor = "red";
  }
  else{
    moving.shapeColor = "green";
    fixed.shapeColor = "green";
  }

 //BOUNCE OFF ALGORITHM
  if(fixed.x - moving.x < moving.width/2 + fixed.width/2
    && moving.x - fixed.x < moving.width/2 + fixed.width/2){
      //velocityX reverse
      moving.velocityX=moving.velocityX*(-1);
      fixed.velocityX=fixed.velocityX*(-1);
  }
  if(fixed.y - moving.y < moving.height/2 + fixed.height/2
    && moving.y - fixed.y < moving.height/2 + fixed.height/2){
      //velocityY reverse
      moving.velocityY=moving.velocityY*(-1);
      fixed.velocityY=fixed.velocityY*(-1);
  }

  drawSprites();
}

/*
ALGORITHM
The actual method/logic to solve a problem
A computer algorithm is a set of instructions given to the computer to solve a problem

Pre-defined algorithms
-Detecting collision between two objects (isTouching())
-Bouncing two objects (bounce(), bounceOff())
*/