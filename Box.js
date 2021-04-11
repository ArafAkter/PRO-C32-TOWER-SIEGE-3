class Box extends BaseClass {
  constructor(x, y){
    super(x,y,30,40);
   // this.image = loadImage("sprites/enemy.png");
  }
display(){
 // console.log(this.body.speed)
  //super.display()
if((this.body.speed) < 4){
  super.display();
}
else{
  World.remove(world,this.body)
}

}
};