var bullet, wall, speed, weight, damage, thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  
  weight = random(30, 52);
  
  thickness = random(22, 83);

  damage = (0.5 * speed * weight * speed) / (thickness * thickness * thickness)

  bullet = createSprite(50, 200, 30, 15);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80, 80, 80);
}

function draw() {
  background(0); 
  
 if (isTouching(bullet, wall)) {
   bullet.velocityX = 0;
   
   if (damage >= 10) {
     wall.shapeColor = "red";
   }

   if (damage < 10) {
     wall.shapeColor = "green";
   }
 }

  drawSprites();
}
