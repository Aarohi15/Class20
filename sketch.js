var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 100, 50);
  fixedRect.shapeColor = "yellow"
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "black"
}

function draw() {
  background(100);
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    
      fixedRect.shapeColor = "blue"
    movingRect.shapeColor = "red"
  }
  else{
    fixedRect.shapeColor = "yellow"
    movingRect.shapeColor = "black"
  }
  
  drawSprites();
}