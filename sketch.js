var ball;
var ground;
var rock;
var wall;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  var ball_options = {
    restitution:1,
    frictionAir:0.01,
  }
  ball = Bodies.circle(100,100,30,ball_options);
World.add(world,ball);

var ground_options = {
  isStatic:true,
}
ground = Bodies.rectangle(0,380,400,20,ground_options);
World.add(world,ground);

var rock_options = {
  restitution:1,
  frictionAir:0.6
}
rock = Bodies.circle(350,100,10,rock_options);
World.add(world,rock);

var wall_options = {
  isStatic:true,
}
wall = Bodies.rectangle(100,200,200,20,wall_options);
World.add(world,wall);
}

function draw() 
{
  background(51);
 Engine.update(engine);
 ellipse(ball.position.x,ball.position.y,30); 

 rect(ground.position.x,ground.position.y,400,20);

 ellipse(rock.position.x,rock.position.y,10);

 rect(wall.position.x,wall.position.y,200,20);
}

