class Dustbin{
    constructor(x, y) {
        var options = {
            isStatic:true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.bottom = Bodies.rectangle(x, y, 100, 20, options);
        this.width = 100;
        this.height = 20;
        
        World.add(world, this.bottom);
       
        this.Image=loadImage("dustbingreen.png");
      }
      display(){
        imageMode(CENTER);
      image(this.Image,this.bottom.position.x,this.bottom.position.y,this.width,this.height);
      
      }
    }