class Ball{
    constructor(x,y,radius){
        var options = {
            'restituiton':0.8,
            'friction':1,
            'density':1
        }
        this.body= Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(176,219,83);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
    }
}