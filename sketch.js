const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops = 50;
var drops = [];
var engine, world;
var bgImg, bg;
var sprite1;
var gif1;
var jerImg, jer;
var gif2;
var sprite2;
function preload(){
  bgImg = loadImage("maxresdefault.jpg");
  gif2 = loadAnimation("Screenshot__59_-removebg-preview.png", "Screenshot__60_-removebg-preview.png", "Screenshot__61_-removebg-preview.png", "Screenshot__62_-removebg-preview.png", "Screenshot__62_-removebg-preview.png")
  gif1 = loadAnimation("Screenshot__46_-removebg-preview.png", "Screenshot__47_-removebg-preview.png", "Screenshot__48_-removebg-preview.png", "Screenshot__50_-removebg-preview.png", "Screenshot__48_-removebg-preview.png", "Screenshot__47_-removebg-preview.png")
  jerImg = loadAnimation("Screenshot__30_-removebg-preview.png", "Screenshot__32_-removebg-preview.png", "Screenshot__34_-removebg-preview.png" )
  }

function setup(){
    createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    for(var i=0; i<maxDrops; i++){
      drops.push(new Drop(random(0,300), random(0,400), 10));    
}
    sprite1 = createSprite(150, 300, 50, 50);
    sprite1.addAnimation("sprite1", gif1);
    sprite1.scale = 0.5;
    sprite2 = createSprite(400, 200, 10, 10);
    sprite2.addAnimation("sprite2", gif2);
  jer = createSprite(600, 300, 50, 50);
  jer.addAnimation("jer", jerImg);
  jer.scale = 0.8;
    


}

function draw(){
    background(bgImg);
    Engine.update(engine);
    
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
        
    }


    drawSprites();
}
    
















