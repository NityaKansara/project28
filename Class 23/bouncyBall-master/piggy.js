class Piggy {

    //PROPERTIES
    constructor(x, y){

        var options = {  'restitution':0.8,
        'friction':1.0,
        'density':1.0};
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }

    //FUNCTIONS
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("green");
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
    }
}