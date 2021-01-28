class Bird extends BaseClass{
    constructor(x, y) {
      super(x, y, 50, 50);  
      this.image = loadImage("sprites/bird.png");    
    }
    display(){       
      this.body.position.x=mouseX;
      this.body.position.y=mouseY; 
      super.display();                     
    }
}

/*
INHERITANCE
Parent Class - BASE class
Children Classes - inherit all the properties & functions from the parent
  -Sub Classes

super() - transfers all the properties from the constructor of the base class to the constructor of the sub classes
*/ 