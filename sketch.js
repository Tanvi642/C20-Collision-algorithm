var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(250,250,80,30);
  movingRect.shapeColor = "orange";
  movingRect.debug = true;
  
  fixedRect=createSprite(400,200,50,80);
  fixedRect.shapeColor = "orange";
  
  fixedRect.debug = true; 
}

function draw() {
  background(0,0,0); 
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 && 
    movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2 ){ 
    fixedRect.shapeColor = "pink";
    movingRect.shapeColor = "pink";
}

else{
  fixedRect.shapeColor = "orange";
  movingRect.shapeColor = "orange"; 
}
  drawSprites();
}