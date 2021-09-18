class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.Cannon_1 = loadImage ("assets/cannonBase.png");
    this.Cannon_2 = loadImage ("assets/canon.png");
 
  }
  
  display () {
  push();
  imageMode(CENTER);
  //translate(this.x, this.y);
  image(this.Cannon_2, this.x, this.y, this.width,this.height);
  pop();
  image(this.Cannon_1,70,20,200,200)
  }
}
