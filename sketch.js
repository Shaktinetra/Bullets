var bullet, wall, speed, weight, damage, thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  
  weight = random(30, 52);

  damage = (0.5 * speed * weight * speed) / (thickness * thickness * thickness)

  bullet = createSprite(50, 200, 10, 5);
  bullet.shapeColor = "white";
  
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80, 80, 80);

  bullet.velocityX = speed;

  thickness = random(22, 83);
}

function draw() {
  background(0); 

 bullet.collide(wall);
  
 if (hasCollided(bullet, wall)) {
   bullet.velocityX = 0;

   if (damage > 10) {
     wall.shapeColor = color(255, 0, 0);
   }

   if (damage < 10) {
     wall.shapeColor = color(0, 255, 0);
   }
 }

  drawSprites();
}
