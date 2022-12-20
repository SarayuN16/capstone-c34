var backgroundImg;
var plantImg,food;
var fishImg;
var scissorsImg;
var food1,food2,food3;

var gameState="end";
var gs = "a";

var point = 0;

let engine;
let world;


function preload()
{
  backgroundImg = loadImage("backgroundImg.png");
  fishImg= loadImage("fishImg.png");
  plantImg= loadImage("plantImg.png");
  scissorsImg = loadImage("/scissorImg.png");
  checkmarkImg= loadImage("checkmark.png");
}

function setup()
{
  createCanvas(windowWidth,windowHeight);
 

  rectMode(CENTER);
  ellipseMode(RADIUS);

  button = createImg('scissorImg.png');
  button.position(300,50);
  button.size(50,50);
  button.mouseClicked(drop);

  button2 = createImg('scissorImg.png');
  button2.position(1000,200);
  button2.size(60,60);
  button2.mouseClicked(drop2);

  button3 = createImg('scissorImg.png');
  button3.position(1500,200);
  button3.size(60,60);
  button3.mouseClicked(drop3);

  food = createSprite(300,100,50,50);
  food.addImage(plantImg);
  food.scale = 0.5;

  food2 = createSprite(1000,250,50,50);
  food2.addImage(plantImg);
  food2.scale = 0.5;


  food3 = createSprite(1500,200,50,50);
  food3.addImage(plantImg);
  food3.scale = 0.5;

  fish1 = createSprite(1500,600,65,65);
  fish1.addImage(fishImg);
  fish1.scale = 0.3;
 
  fish2 = createSprite(1000,550,65,65);
  fish2.addImage(fishImg)
  fish2.scale = 0.3;
  

  fish3 = createSprite(300,450,65,65);
  fish3.addImage(fishImg)
  fish3.scale = 0.3;





 
}

function draw()
{
  background(backgroundImg);




  if(food.isTouching(fish3)){
    check1 = createImg('checkmark.png');
    check1.size(65,65);
    check1.position(300,450);
    point=1;
    
    food.destroy()
  }

  if(food2.isTouching(fish2)){
    check2 = createImg('checkmark.png');
    check2.size(65,65);
    check2.position(1200,550);
    point=2;
    
    food2.destroy()
  }

  if(food3.isTouching(fish1)){
    check3 = createImg('checkmark.png');
    check3.size(65,65);
    check3.position(1500,600);
    point=3;
    
    food3.destroy()


  }
  //console.log(point)

  if(point == 3)
  {
    swal({
      title: "Good Job!",
      text: "You fed the fishes!",
      icon: "success",
      button: "YAY!"
    })
  }
  
  

 

  drawSprites();

}

function drop()
{
  food.velocityY=2;
}

function drop2()
{
  food2.velocityY=2;
}

function drop3()
{
  food3.velocityY=2;
}
