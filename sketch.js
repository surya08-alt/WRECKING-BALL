const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(600,380,1200,20)
  box=new Box(500,260,100,100)
  box1=new Box(500,260,100,100)
  box2=new Box(500,260,100,100)
  box3=new Box(600,260,100,100)
  box4=new Box(600,260,100,100)
  ball=Bodies.circle(200,150,45,{restitution:0.5})
  World.add(world,ball)
  slingShot= new SlingShot(this.ball,{x:400,y:50})
}

function draw() {
  Engine.update(engine);
  background("black")
  ground.display()
  fill("red")
  box.display()
  box1.display()
  box2.display()
  fill("skyblue")
  box3.display()
  box4.display()
  slingShot.display()
  ellipse(ball.position.x,ball.position.y,45,45)
}
function mouseDragged(){Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})}