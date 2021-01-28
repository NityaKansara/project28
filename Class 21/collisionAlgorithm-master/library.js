function isTouching(earth, air){
    //ALGORITHM TO DETECT COLLISION - isTouching()
    if (earth.x - air.x < air.width/2 + earth.width/2
        && air.x - earth.x < air.width/2 + earth.width/2
        && earth.y - air.y < air.height/2 + earth.height/2
        && air.y - earth.y < air.height/2 + earth.height/2) {
          //Yes, they are touching
          //Function should return yes - TRUE
          return true;
    }
    else {
          //No, they aren't touching
          //Function should return no - FALSE
          return false;  
    }
  }
  
  function bouncy(water,fire){
    if(water.x - fire.x < fire.width/2 + water.width/2
      && fire.x - water.x < fire.width/2 + water.width/2){
        water.velocityX=water.velocityX*(-1);
        fire.velocityX=fire.velocityX*(-1);
      }
    
      if(water.y - fire.y < fire.height/2 + water.height/2
        && fire.y - water.y < fire.height/2 + water.height/2){
          water.velocityY=water.velocityY*(-1);
          fire.velocityY=fire.velocityY*(-1);
      }
  }