var play = 1;
var end =  0;
var gameState = 1;
var nife,nifeImage;
var nifeSound;
var gameOverImage;
var gameOverSound;
var monster;
var fruit;
var fruit1,fruit2,fruit3,fruit4;
var monsterImage;
var fruitGroup;
var enemyGroup;
var score = 0;

function preload(){
  nifeImage = loadImage("sword.png");
  nifeSound = loadSound("knifeSwooshSound.mp3");
  gameOverImage = loadImage("gameover.png");
  gameOverSound =  loadSound("gameover.mp3");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  monsterImage = loadImage("alien1.png");
}
function setup(){
createCanvas(450,450);
nife = createSprite(200,200,10,10);
  nife.setCollider("rectangle",0,0);
  nife.debug = false;
  nife.addImage(nifeImage);
  nife.scale = 0.7;
 
  fruitGroup=createGroup();
  enemyGroup=createGroup();
  
}
function draw(){
  background("skyblue");
  textSize(20);
  fill("red");
  text("Score "+score,350,20); 
  if(gameState === play){
  Enemy();
  fruits();
    nife.x = mouseX;
    nife.y= mouseY;
    if(fruitGroup.isTouching(nife)){
    fruitGroup.destroyEach();
      score = score+5;
      nifeSound.play();
    }
    else if(enemyGroup.isTouching(nife)){
      gameOverSound.play();
    gameState = end;
      nife.x = 225;
      nife.y = 200;
      nife.scale = 2;
      nife.addImage(gameOverImage);
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      fruitGroup.velocityX = 0;
      enemyGroup.velocityX = 0;
    }
      if(fruitGroup.isTouching(enemyGroup)){
    enemyGroup.y = enemyGroup.y-10;
    }
    
   
  }
  drawSprites();
  
  
}
function fruits(){
  
 if(World.frameCount%80===0){ 
  fruit=createSprite(420,200,20,20);
  fruit.scale=0.2;
  r=Math.round(random(1,4)); 
  if(r ===1 ) {
  fruit.addImage(fruit1);
  } else if (r  === 2){
    fruit.addImage(fruit2)
    } else if (r  === 3){
    fruit.addImage(fruit3)
      } else if (r === 4){
    fruit.addImage(fruit4)
      }
   fruit.y=Math.round(random(50,400));
   fruit.velocityX=-10;
   fruit.setlifetime=40;
   
   fruitGroup.add(fruit);
}
}
  
function Enemy(){
  
 if(World.frameCount%300===0){ 
 monster=createSprite(410,200,20,20);
 monster.addImage("moving",monsterImage);
 monster.y=Math.round(random(100,400)); 
 monster.velocityX=-10;
 monster.setlifetime=40;
   
 enemyGroup.add(monster);  
}
}