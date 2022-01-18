var runner;
var path;
var runnerImg;
var runnerImg;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  //imagens pré-carregadas
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  path=createSprite(width/2,200);
  path.addImage(pathImg);
  path.velocityY = 4;


  runner = createSprite(width/2,height-20,20,20);
  runner.addAnimation("Running",runnerImg);
  runner.scale=0.08;
}

function draw() {
  if(gameState===PLAY){
    background(0);
    runner.x = World.mouseX;
    
    edges= createEdgeSprites();
    runner.collide(edges);
  }

  if(path.y > height ){
    path.y = height/2;
  }
 
 drawSprites();
}
