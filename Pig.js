class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity=255;
  }
display(){

if(this.body.speed<3){
  super.display();
}else{
  push();
  this.Visiblity=this.Visiblity-5;
  tint(255,this.Visiblity)
  image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
  pop();
  World.remove(world,this.body);

}
}
score(){
if(this.Visiblity<0&&this.Visiblity>-1000){
  score=score+1;
  
}
if(this.Visiblity<250&&this.Visiblity>230){
pigsound.play();
}
}
};