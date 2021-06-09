const Engine=Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var ManImg,thunderImg1,thunderImg2,thunderImg3,thunderImg4;
var character;
var drops=[];
var maxDrops=100;
var thunder;
var randomNo= random(1,4);

function preload(){

  
    ManImg=loadImage("images/walking_1.png");

    thunderImg1=loadImage("images/thunderbolt/1.png");
    thunderImg2=loadImage("images/thunderbolt/2.png");
    thunderImg3=loadImage("images/thunderbolt/3.png");
    thunderImg4=loadImage("images/thunderbolt/4.png");
   
}

function setup(){

    createCanvas(600,700);
   
engine=Engine.create();
world= engine.world;

// makes the character
character=new Umbrella(300,500);

// makes the drops 

if(frameCount%150===0){
for(var i=0;i<maxDrops;i++){
    drops.push(new Drop(random(0,600),random(0,600)));

}

}
    
}

function draw(){

    Engine.update(engine);

    background("black");
// gives a random thunder image according to the frame count
    if(frameCount%100===0){
        thunder=createSprite(300,100,10,10);
        thunder.scale=random(0.3,0.6);
        thunder.addImage(thunderImg1);
       thunder.lifetime=50;
    }
   
    if(randomNo===1){
        thunder.addImage(thunderImg1);
    }
    if(randomNo===2){
        thunder.addImage(thunderImg2);
    }
    if(randomNo===3){
        thunder.addImage(thunderImg3);
    }
    if(randomNo===4){
        thunder.addImage(thunderImg4);
    }

//displays the character of the game 

character.display();
//displays the drops

for(var i=0;i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
}

    drawSprites();
    
}   

