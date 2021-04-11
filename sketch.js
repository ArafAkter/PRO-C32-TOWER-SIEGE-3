const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

var score = 0

function preload() {
  //  backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    bird = new Bird(175,150);

 ground = new Ground(width/2,height,width,20);
    platform = new Ground(500,250,300,10)
    platform2 = new Ground(800,300,200,10)

    block1 = new Box(425,200,20,40)
    block2 = new Box(465,200,30,40)
    block3 = new Box(505,200,30,40)
    block4 = new Box(545,200,30,40)
    block5 = new Box(585,200,30,40)

    block6 = new Box(445,170,30,40)
    block7 = new Box(485,170,30,40)
    block8 = new Box(525,170,30,40)
    block9 = new Box(565,170,30,40)

    block10 = new Box(465,140,30,40)
    block11 = new Box(505,140,30,40)
    block12 = new Box(545,140,30,40)
   
    block13 = new Box(485,110,30,40)
    block14 = new Box(525,110,30,40)

    block15 = new Box(505,80,30,40)

    block16 = new Box(750,270,30,40)
    block17 = new Box(785,270,30,40)
    block18 = new Box(820,270,30,40)

    block19 = new Box(785,240,30,40)

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:175, y:150});
    getTime()
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
 //   text(Math.round(bird.body.position.x) ,50,50)
   // text(Math.round(bird.body.position.y) ,1100,75)
    //regularPolygon(0, 0, 14, 50);
    strokeWeight(4);
 //  hex = regularPolygon(350, 275, 14, 50);
  // hex.positionX =  bird.body.position.x
 ground.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();

block6.display();
block7.display();
block8.display();
block9.display();

block10.display();
block11.display();
block12.display();

block13.display();
block14.display();

block15.display();

block16.display();
block17.display();
block18.display();

block19.display();

 platform.display();
platform2.display();
    bird.display();

   slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body)
        Matter.Body.setPosition(bird.body, {x: 175 , y: 150});  
    }
    score = score + 1
    }
    async function getTime(){
    
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
        var responseJSON = await response.json();
        console.log(responseJSON.datetime)
     var datetime = responseJSON.datetime;

     var hour = datetime.slice(10,13)
     console.log(hour)

     if(hour >= 06 && hour <= 18 ){
   // background("lightcyan");
   bg = "lightcyan"
     }
     else{
        //background("darkblue");
        bg = "black"
     }
     backgroundImg = bg
     }