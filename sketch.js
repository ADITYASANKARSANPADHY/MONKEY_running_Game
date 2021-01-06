
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage,backGround,ground,backgroundImage;
var bananaGroup, obstacleGroup;
var score = 0;

function preload(){
  
  
  monkey_running =loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("stone.png");
  backgroundImage = loadImage("jungle.jpg");

  monkeyStanding = loadImage("Monkey_01.png");
}



function setup() {
createCanvas(400,400)  

  backGround = createSprite(0,0,600,600);
  backGround.addImage(backgroundImage);
  backGround.scale = 1.5; 
  backGround.velocityX = -3;

monkey = createSprite(80,315,20,20);  
monkey.addAnimation("AMINAH",monkey_running);   
monkey.scale = 0.1;  
monkey.addImage("HANIMA",monkeyStanding);
  
  
ground = createSprite(400,425,900,300);  
ground.velocityX = -2;  
ground.height = ground.height/2;
ground.shapeColor = "green";
ground.visible = false;

bananaGroup = new Group();
obstacleGroup = new Group();




}


function draw() {
//background("white");

  
if(backGround.x<0){
  backGround.x = backGround.width/2
} 
  
if(ground.x<0){
  ground.x = ground.width/2
} 
  if(keyDown("space") && monkey.y>=316){
    monkey.velocityY = -12;
     
}     
  monkey.velocityY = monkey.velocityY + 0.8; 
  console.log(monkey.y)
  
  monkey.collide(ground);
  
  FoodCourt();
  creatngObstacles();
  
  if(bananaGroup.isTouching(monkey)){
     
     score = score+5;
    bananaGroup.setLifetimeEach(0);
  } 
  
  
 if(obstacleGroup.isTouching(monkey)){
     ground.velocityX = 0;
     monkey.scale = 0.3;
     score = 0;
   
   obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    backGround.velocityX = 0;
   monkey.changeImage("HANIMA", monkeyStanding); 
   
   
   obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1); 
 
    bananaGroup.destroyEach(0);
    obstacleGroup.setVisibleEach(false);
 
    if(keyDown("space")){
    monkey.velocityY = 0;
     
}     
 } 
  
  drawSprites();  
 
  stroke("white"); 
  textSize(30);
  text("Score: "+ score,250,50); 

}

function FoodCourt(){
  
  if (frameCount % 80 == 0 ){
   banana = createSprite(200,300,20,20);  
  banana.y = Math.round(random(180,240));  
  banana.addImage(bananaImage); 
  banana.scale = 0.04;
  banana.velocityX = -5;
  banana.lifetime = 350;
  bananaGroup.add(banana);
  
  }
   
}

function creatngObstacles(){
if (frameCount %340 == 0 ){
   obstacle = createSprite(200,330,20,20);

  obstacle.addImage(obstacleImage); 
  obstacle.scale = 0.1;
  obstacle.velocityX = -4;
  obstacleGroup.add(obstacle);

switch(score) {
      case 15: monkey.scale = 0.13;
              break;
      case 30: monkey.scale = 0.16;
              break;
      case 45: monkey.scale = 0.19;
              break;
      case 60: monkey.scale = 0.22;
              break;
      case 75: monkey.scale = 0.25;
              break;      
              default: break;
    }


} 

}
