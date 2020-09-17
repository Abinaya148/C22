const Engine1 = Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;

var ground,ball;
var engine,world;
function setup()
{
createCanvas(400,400);
engine = Engine1.create();
world = engine.world;
var option1_option={
  isStatic:true
}
var option2_option={
  restitution:0.6
}
ground = Bodies.rectangle(200,380,400,50,option1_option);
ball = Bodies.circle(200,100,50,option2_option);
World.add(world,ground);
World.add(world,ball);

}
function draw(){
background("lightblue");
Engine1.update(engine);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,50);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,50,50);
}