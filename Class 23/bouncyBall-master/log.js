class Log {

    //PROPERTIES
    constructor(x, y,h,angle){

        var options = {  'restitution':0.8,
        'friction':2.0,
        'density':1.0};
        this.body = Bodies.rectangle(x, y, 20, h, options);
        this.width = 20;
        this.height = h;
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
    }

    //FUNCTIONS
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill(255);
        stroke("green");
        strokeWeight(4);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
    }
}
