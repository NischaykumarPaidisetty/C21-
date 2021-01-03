var  wall, thickness;
var bullet,speed, weight;

//function preload(){
  //bulletImg = loadImage("bulletImg.jpg");
//}

function setup() {
  createCanvas(1600,400);
speed=random(55,90)
weight=random(400,1500)

 bullet=createSprite(50, 200, 40, 10);
bullet.velocityX = speed;
bullet.shapeColor = "white";

speed = Math.round(random(223,321));
weight = Math.round(random(30,52)); 



wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor="80,80,80";

thickness = Math.round(random(22,83));

}

function draw() {
  background("black");  

  if(wall.x-bullet.x <= (bullet.width+wall.width)/5){
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180){
      bullet.shapeColor=color(230,230,0);
      fill("green");
      textSize(30);
      text("Very unsafe", 500, 150)
      text("Deformation : "+Math.round(deformation), 500, 200);
    }

    
    if(deformation<180 && deformation>100){
      bullet.shapeColor=color(230,230,0); 
      fill("blue");
      textSize(30);
      text("Unsafe", 500, 150)
      text("Deformation : "+Math.round(deformation) , 500, 200);
    }
    
    if(deformation<100){
      bullet.shapeColor=color(0,255,0);
      fill("red");
      textSize(30);
      text("Safe", 500, 150)
      text("Deformation : "+Math.round(deformation), 500, 200);
    }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;  
  wallLeftEdge = lwall.x;
  
  if(bulletRightEdge>= wallLeftEdge)
  {
    return true;
  }


if( hasCollided(bullet,wall))
{

bullet.velocityX = 0;
var damage = 0.5 * weight * speed * speed /(thickness*thickness*thickness);

if(damage>10)
{
wall.shapeColor =color(255,0,0);
}

if(damage<10)
  {
wall.shapeColor =color(0,255,0);
  }

 }
   
return false;
}



