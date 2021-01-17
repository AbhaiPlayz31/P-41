const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;

var umbrella;

var maxDrops = 100;
var drops=[]

var thunder1, thunder2, thunder3, thunder4;

var batman;

var thunder;

function preload(){

    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");

    batman = loadImage("batman.png");


    
}

function setup(){

    canvas = createCanvas(400,610)

    engine= Engine.create();
    world = engine.world;
    
    umbrella = new Umbrella(200,400);


    if(frameCount %  100 === 0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }
    }
   
    
}

function draw(){

    background("black")
    
    Engine.update(engine);

    image(batman, 253,10,200,400);

    if(frameCount % 50 === 0){

        thunder = createSprite(random(10,380), random(10,30),10,10);

        var r = Math.round(1,4);

        if(r === 1){
            thunder.addImage(thunder1);
        }
        else if(r === 2){
            thunder.addImage(thunder2);
        }
        else if(r === 3){
            thunder.addImage(thunder3);
        }
        else{
            thunder.addImage(thunder4);
        }


        thunder.scale = random(0.3,0.8);



        
    
    
    }

    if(frameCount % 60 === 0){
        thunder.destroy();
    }




    umbrella.display();

    for(var i=0; i<maxDrops; i++){
        drops[i].updateY();
        drops[i].display();
    }

    drawSprites();
    
}   

