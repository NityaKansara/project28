class Box {

    //PROPERTIES
    constructor(x, y, w, h){

        var options = {  'restitution':0.8,
        'friction':1.0,
        'density':1.0};
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
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

/*
x
sprite.x = 200;

this - keyword used for the currently active object using the property
*/