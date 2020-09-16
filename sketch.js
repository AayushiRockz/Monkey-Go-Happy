
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime, ground,rand;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)

  //creating monkey
  monkey = createSprite(100,290,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.13;
  
  edges = createEdgeSprites();
  
  //make ground
  ground = createSprite(400,350,800,10);
  ground.velocityX =-4;
  ground.x=ground.width /2;

  FoodGroup = createGroup();
  obstacleGroup =createGroup();
  
  
  survivalTime = 0;
}


function draw() {
  background("lightgreen");
  stroke("black");
  textSize(25);
  survivalTime = Math.ceil(frameCount/ frameRate())
 
  text("Survival time:"+  survivalTime,100,50)
  
  if(ground.x<0){
  ground.x=ground.width /2;
  
  }
  
  
  if(keyDown("space")){
  monkey.velocityY = -10;
    
  }
   monkey.velocityY =monkey.velocityY+ 0.5 ;
 
    monkey.collide(ground);
    monkey.collide(edges);
  
  food();
  if(FoodGroup.isTouching(monkey))
  {
   survivalTime = survivalTime + 10;
    FoodGroup.destroyEach();
  } 
  
  spawnObstacles();
  
  if(monkey.isTouching(obstacleGroup)){
  text("GAME OVER",100,150);
  
    destroyEach();
  
    
  }
  
  drawSprites();
  
}

function food(){
  if(frameCount % 80 === 0){
  banana = createSprite(400,rand,20,20)
  banana.addImage("banana",bananaImage);
  banana.scale = 0.12;
  rand = Math.round(random(100,300)); 
  banana.velocityX = -4    
    
   banana.lifetime = 100;

 FoodGroup.add(banana); 
  }
 
   
}

function spawnObstacles(){
  if(frameCount % 300 === 0){
 obstacle = createSprite(400,325,20,20)
  obstacle.addImage("obstacles",obstacleImage);
  obstacle.scale = 0.12;
  
  obstacle.velocityX = -4    
    
   obstacle.lifetime = 100;
 obstacleGroup.add(obstacle);

 
  }
   
}




