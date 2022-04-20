
var engine,world1,ground, groundOptions,ball,ballOptions,box1,box2,box10,box11
var box12,log1, box3,box4,log2,box5,log3,log4,conOptions, birdConstraint,bgImg
var sling
var gameState = "notReleased"
function preload(){
  bgImg = loadImage("sprites/bg.png")
}

function setup() {
  createCanvas(1200,600);
  engine = Matter.Engine.create()
  world1 = engine.world

 groundOptions = {
   isStatic:true
 }

  ground = Matter.Bodies.rectangle(600,570,1200,40,groundOptions)
  Matter.World.add(world1,ground)

  ground2 = Matter.Bodies.rectangle(200,450,400,200,groundOptions)
  Matter.World.add(world1,ground2)

  ground3 = Matter.Bodies.rectangle(1200,300,20,600,groundOptions)
  Matter.World.add(world1,ground3)



 

box1 = new Box(700,450,70,70)
box2 = new Box(1000,450,70,70);
log1 = new Log(850,400,380,PI/2)

box3 = new Box(700,330,70,70)
box4 = new Box(1000,330,70,70)
log2 = new Log(850,270,380,PI/2)

box5 = new Box(850,230,70,70)

log3 = new Log(780,230,120,PI/8)
log4 = new Log(880,230,120,-PI/8)

bird = new Bird(100,100)

pig1 = new pig(850,450)
pig2 = new pig(850,380)

sling = new SlingShot(bird.body,{x:250,y:170})


 
}

function draw() {
  background(bgImg);  
  Matter.Engine.update(engine)

  rectMode(CENTER)
  fill("brown")
  rect(ground.position.x,ground.position.y,1200,40)
  rect(ground2.position.x,ground2.position.y,400,200)
  rect(ground3.position.x,ground3.position.y,20,600)
  
sling.display()
box1.display()
box2.display()

log1.display()

box3.display()
box4.display()

log2.display()

box5.display()
log3.display()
log4.display()

pig1.display()
pig2.display()


bird.display()

}

function mouseDragged(){
  if(gameState=="notReleased"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})

  }
}

function mouseReleased(){
  sling.fly()
  gameState = "released"
}

function keyPressed(){
  if(keyCode==32){
    Matter.Body.setPosition(bird.body,{x:250,y:170})
    sling.attach()
    gameState = "notReleased"
  }
}