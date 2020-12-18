class Slingshot{
    constructor(bodyA,B){
        var Options={
            bodyA:bodyA,
            pointB:B,
            stiffness:0.05,
            length:10
        }
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
        this.pointB=B
        this.band=Matter.Constraint.create(Options)
        World.add(world,this.band);
    
    }
    display(){
        if(this.band.bodyA){
        var x1y1=this.band.bodyA.position;
        var x2y2=this.pointB;
        push();
        if(x1y1.x<210){
            strokeWeight(7);
            stroke(48,22,7);
            line(x1y1.x-25,x1y1.y,x2y2.x+20,x2y2.y);
            line(x1y1.x-25,x1y1.y,x2y2.x-20,x2y2.y);
            image(this.sling3,x1y1.x-25,x1y1.y-10,15,30);
        }else{
            strokeWeight(5);
        stroke(48,22,7);
        line(x1y1.x+25,x1y1.y,x2y2.x+20,x2y2.y);
        line(x1y1.x+25,x1y1.y,x2y2.x-20,x2y2.y);
        image(this.sling3,x1y1.x+15,x1y1.y-10,15,30);
        }
        
        pop();
    }
    image(this.sling1,200,23);
    image(this.sling2,170,22);

    
}
    fly(){
        this.band.bodyA=null;
       
    }
    attach(body){
        this.band.bodyA=body;
    }
}
   