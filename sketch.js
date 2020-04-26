function setup() {
   createCanvas(400,400);
    }

function draw() {
  background(100); 
  for(var i = 0;i<100;i=i+1)
  {
    drop[i]=new drop();
    drop[i].display(); 
    drop[i].update();
  }

  drawSprites();
}



