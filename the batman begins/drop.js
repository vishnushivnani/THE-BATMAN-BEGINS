class Drop{
    constructor(x,y){
        var options={
            friction:0.01,
            restitution:0.01
        }

        this.body=Bodies.circle(x,y,10,options);
        this.x=x;
        this.y=y;
        this.radius=10;

        World.add(world,this.body);
    }
    update(){
        if(this.body.position.y> height){
            Matter.Body.setPosition(this.body,{x:random(0,600),y:0})
        }
    }

    display(){
        var pos=this.body.position;
        push();
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}