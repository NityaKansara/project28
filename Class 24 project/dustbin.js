class Dustbin{
    constructor(x, y) {
        var options = {
            isStatic:true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.bottom = Bodies.rectangle(x, y, 100, 20, options);
       this.left = Bodies.rectangle(x-50, y-40, 20, 100, options);
        this.right = Bodies.rectangle(x+50, y-40, 20, 100, options);
        this.width = 100;
        this.height = 20;
        this.heightside = 100;
        this.widthside = 20;
        World.add(world, this.bottom);
        World.add(world, this.left);
        World.add(world, this.right);
      }
      display(){
        rectMode(CENTER);
      rect(this.bottom.position.x,this.bottom.position.y,this.width,this.height);
      rect(this.left.position.x,this.left.position.y,this.widthside,this.heightside);
      rect(this.right.position.x,this.right.position.y,this.widthside,this.heightside);
      }
    }