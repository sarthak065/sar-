
var runner,path;
var bomb,drink;
var power ,coin,edges;
var runnerrrunning,leftboundry;
var rightboundry,coinImage;
var pathImage;
function preload(){
  
runnerrrunning=loadImage("Runner-1.png","Runner-2.png");
pathImage=loadImage(path.png)
energyDrink=loadImage(energyDrink.png);
coinImage=loadImage(coin.png);
bombImage=loadImage(bomb.png);
power=loadImage(power.png);
}

function setup(){
  createCanvas(400,400);
 edges=createEdgeSprites();
 path=createSprite(200,200);
 path.addImage=(pathImage)
 runner=createSprite(180,340,50,170);
runner.addImage(runnerrrunning);
coin=createSprite(200,200,80,90);
coin.addImage=(coinImage);
coin.scale=0.3;
leftboundry=createSprite(0,0,100,800);
leftboundry.visible=false;
rightboundry=createSprite(410,0,100,800);
rightboundry.visible=false;



  //create sprites here
}

function draw() {
  background(0);
  
  text("0",20,230);
  path.velocityY=5;
 
  path.scale=1.2;
  runner.x=World.mouseX
    if(path.y>400){
      path.y=height/2
    }
    //if (runner.isTouching(coin)){
      //coinscore=coinsore+1;
    //}//
    runner.collide(leftboundry)
    runner.collide(rightboundry)
    edges=createEdgeSprites()
   runner.collide(edges)
drawSprites();
}