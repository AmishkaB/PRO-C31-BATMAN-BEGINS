class Drops{
    constructor(x,y){
        var options={
            restitution:2.5,
            density:5,
            friction:0.5
        }
        this.body=Bodies.circle(x,y,5,options);
        this.r=5;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;

        push()
        translate(pos.x,pos.y)
        fill('rgb(6, 121, 255)')
        ellipseMode(RADIUS);
        ellipse(0,0,this.r-1,this.r+2);
        
        pop()
    }

}