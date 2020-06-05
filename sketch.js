const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var circle1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }


    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
var options = {
    restitution: 0.5
}
    circle1 = Bodies.circle(200,100,30,options);
    World.add(world,circle1);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(circle1.position.x,circle1.position.y,30,30)
}