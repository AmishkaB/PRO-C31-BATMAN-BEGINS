const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var drops=[]
var engine;
var world;
var maxDrops=100;

function preload(){
    
}

function setup(){

   createCanvas(600,400);
    engine=Engine.create()
    world=engine.world;
    Engine.run(engine)
  
    
}

function draw(){
    
    background('black')


    if(frameCount%0.5===0){
        drops.push( new Drops(random(30,500),5))
    }
      /* for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400),random(0,400)));
    }
    */

    for(var i=0;i<drops.length;i++){
        drops[i].display()
    }

}   

