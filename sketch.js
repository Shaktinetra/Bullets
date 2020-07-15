var bullet, wall, speed, weight, damage, thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(220, 340);
  weight = random(30, 52);  
  thickness = random(50, 100);

  bullet = createSprite(50, 200, 20, 20);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  console.log(speed);

  wall = createSprite(1200, 200, thickness, height/2);
}

function draw() {
  background(0); 
  
 if (hasCollided(bullet, wall)) {
   bullet.velocityX = 0;

   damage = (0.5 * speed * weight * speed) / (thickness * thickness * thickness);

   if (damage >= 10) {
     wall.shapeColor = "red";
   }

   if (damage < 10) {
     wall.shapeColor = "green";
   }
   bullet.collide(wall);
 }

 drawSprites();
}  