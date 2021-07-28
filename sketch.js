var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var boyImg;
var ground;
function preload(){
  backgroundImg =loadImage("snow2.jpg");
  boyImg=loadImage("boy.png");

}

function setup() { 
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

 // ground = new Ground(width/2,height,width,20);
 snow = new snowFall(80,100,10,10);
 snow1 = new snowFall(90,100,10,10);
 snow2 = new snowFall(100,100,10,10);
 snow3 = new snowFall(110,100,10,10);
 snow4 = new snowFall(120,100,10,10);
 snow5 = new snowFall(130,100,10,10);
 snow6 = new snowFall(140,100,10,10);
 snow7 = new snowFall(150,100,10,10);
 snow8 = new snowFall(160,100,10,10);
 snow9 = new snowFall(170,100,10,10);
 snow10 = new snowFall(180,100,10,10);
 snow11= new snowFall(190,100,10,10);
 snow12 = new snowFall(200,100,10,10);
 snow13 = new snowFall(210,100,10,10);
 snow14 = new snowFall(220,100,10,10);
 snow15 = new snowFall(230,100,10,10);
 snow16 = new snowFall(240,100,10,10);
 snow17 = new snowFall(250,100,10,10);
 snow18 = new snowFall(260,100,10,10);
 snow19 = new snowFall(270,100,10,10);
 snow20 = new snowFall(280,100,10,10);
 snow21 = new snowFall(290,100,10,10);
 snow22 = new snowFall(300,100,10,10);
 snow23= new snowFall(310,100,10,10);
  boy= createSprite(970,500,10,10);
  boy.scale=0.4;
  boy.addImage(boyImg);

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

//ground.display();
snow.display();
snow1.display();
snow2.display();
boy.display();
  drawSprites();
 
    
}