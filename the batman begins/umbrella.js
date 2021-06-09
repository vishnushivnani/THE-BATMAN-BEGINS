class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true,
            density:1
        }

        this.x=x;
        this.y=y;
        this.r=50;
        this.body= Bodies.circle(x,y,50,options);
        this.image=loadImage("images/walking_1.png","images/walking_2.png",
        "images/walking_3.png","images/walking_4.png",
        "images/walking_5.png","images/walking_6.png",
        "images/walking_7.png","images/walking_8.png");
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;

        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
        pop();
    }
}