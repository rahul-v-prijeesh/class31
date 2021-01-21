class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2= loadImage("sprites/smoke.png")
   this.movement=[]

  }

  display() {
    //this.body.position.x = mouseX;
    super.display();//this.body.position.y = mouseY;
   if(this.body.velocity.x>10 && this.body.position.x>200 )
    {
      var position=[this.body.position.x,this.body.position.y]
    this.movement.push(position)
  }
    
  for(var i =0; i<this.movement.length;i++){
    image(this.image2,this.movement[i][0],this.movement[i][1])
  }
      
  }
}
