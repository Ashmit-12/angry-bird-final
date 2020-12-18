/*var name="ashmit";
//console.log(name);
var age=14;
//console.log(age);
var bull=true;
//console.log(bull);


var arr = ["jayshree",20, false]
//console.log(arr);
var arr2 = [name, age, bull];
arr2.push("house")
//console.log(arr2.length);

var arr3 = [arr, arr2];
//console.log(arr3[0][0]);

arr3 = []
console.log(arr3);*/

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var log6;
var band;
var gamestate="onsling";
var score;
var birdflysound,pigsound;
var bird2,bird3,bird4;
var birds=[];
function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
    getTime();
    birdflysound=loadSound("sounds/bird_flying.mp3");
    pigsound=loadSound("sounds/pig_snort.mp3");
}

function setup(){
    var canvas = createCanvas(1200,400);
    canvas.position(15,70);
    engine = Engine.create();
    world = engine.world;
    score=0;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,20,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,20,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,20,150, PI/7);
    log5 = new Log(870,120,20,150, -PI/7);

    bird = new Bird(200,50);
    bird2= new Bird(150,170);
    bird3= new Bird(100,170);
    bird4= new Bird(50,170);

    birds.push(bird4);
    birds.push(bird3);
    birds.push(bird2);
    birds.push(bird);
    //log6=new Log(150,50,100,PI);
    band=new Slingshot(bird.body,{x:200,y:50})
    }

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    Engine.update(engine);
    textSize(30);
    fill("white");
    text("score :"+score,800,50);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird4.display();
    bird3.display();
    bird2.display();
    bird.display();
    platform.display();
    //log6.display();
    band.display();
    console.log(bird.body.speed);

}
 function mouseDragged(){
    if(gamestate==="onsling"){
     Matter.Body.setPosition(birds[birds.length-1].body,{x:mouseX,y:mouseY});
    // Matter.Body.applyForce(birds[birds.length-1].body,birds[birds.length-1].body.postion,{x:5,y:-5});
     birdflysound.play();
    return false;
 }
}
  
 function mouseReleased(){
     
    band.fly();
    birds.pop();
    gamestate="launched";
    
 }
 function keyPressed(){
     if(keyCode===32 && gamestate==="launched"){
         if(birds.length>=0){
            bird.path=[];
            Matter.Body.setPosition(birds[birds.length-1].body,{x:200,y:50});
            band.attach(birds[birds.length-1].body);
            gamestate="onsling";
            
         }         
     }
 }
 async function getTime(){
     var response = await fetch("http://worldtimeapi.org/api/timezone/Europe/Moscow");
     var responseJson= await response.json();
     var datetime=responseJson.datetime;
     var hour=datetime.slice(11,13);
     console.log(hour);
if(hour>=06&&hour<=19){
    bg="sprites/bg.png";
}else{
    bg="sprites/bg2.jpg";
}
  backgroundImg=loadImage(bg);   
 }