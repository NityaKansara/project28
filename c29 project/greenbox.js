class GreenBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
        fill(87,220,206);
        super.display();
    }
}