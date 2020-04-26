class drop{
    constructor(x, y) {
        this.x = random(width);
        this.y = random(height);
    }
      display(){
          
        noStroke ();
        fill (255);
        ellipse(this.x,this.y,2,10); 
      }
      update(){
        this.y=this.y+8; 
      }
}