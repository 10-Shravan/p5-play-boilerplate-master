var car ,  car2, wall;
var speed , weight;


function setup() {
  
  
  createCanvas(1600,400);
 car=createSprite(400, 200, 50, 50);
 Speed=RandomNumber(0,90)
 wall=createSprite=(1580,0,1000,20);
 wall.shapeColor=color(80,80,80);
 weight=RandomNumber(400,1500);
 car.velocityX=speed;
 car.shapeColor=("green");
 car2=createSprite(400, 300, 50, 50);
 car2.velocityX=speed;
 car2.shapeColor=("blue");
}

function draw() {
  if(car.x-wall.x<(wall.width/2+car.width)/2){
    car.velocityX=0;
 var deformation=0.5*weight*Speed*Speed/22500
 if(deformation>100){
   car.shapeColor=color(255,0,0);
 }
 if(deformation<180 && deformation>100){
   car.shapeColor=color(230,230,0);
 }
 if(deformation<100){
   car.shapeColor=color(0,255,0)
 }
  }
  background(0,0,0);  
  drawSprites();
 }