class Box {

    //PROPERTIES
    constructor(x, y, w, h){

        var options = {restitution: 0.8};
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    //FUNCTIONS
    display(){
        //Add a new setting - fill, rotate & translate
        push();
        fill(255);
        rectMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rect(0,0, this.width, this.height);
        //Revert back to the old setting - without fill, rotate & translate
        pop();
    }
}

/*
x
sprite.x = 200;

this - keyword used for the currently active object using the property


rotating - about an angle
translating - sliding without rotation - about a position
rotate(angle);
translate(x,y);
*/