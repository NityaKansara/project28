var fixedRect, movingRect, gameObject1, gameObject2;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(200, 300, 50, 50); //ARGUMENTS
  gameObject2 = createSprite(300, 300, 50, 50);

  gameObject1.velocityX = 5;
  gameObject2.velocityX = -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //calling the function
  if(isTouching(movingRect, gameObject2)){
    //something happens
    movingRect.shapeColor = "yellow";
    gameObject2.shapeColor = "yellow";
  }
  else{
    //something else happens
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  }
  
  bouncy(gameObject1,gameObject2);

  drawSprites();
}






/*
ARGUMENTS
 - give any value to any function
 - real values
 - take some memory
 - they exist
PARAMETERS
 - non existent
 - not real
 - no memory
 - PLACEHOLDERS  for arguments
*/