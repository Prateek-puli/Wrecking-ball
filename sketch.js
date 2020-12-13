const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2;

function setup(){
    createCanvas(1000, 600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500, 580, 1000, 20);

    box1 = new Box(600, 100, 60 ,60);
    box2 = new Box(600, 100, 60 ,60);
    box3 = new Box(600, 100, 60 ,60);
    box4 = new Box(600, 100, 60 ,60);
    box5 = new Box(600, 100, 60 ,60);
    box6 = new Box(600, 100, 60 ,60);

    box7 = new Box(700, 100, 60 ,60);
    box8 = new Box(700, 100, 60 ,60);
    box9 = new Box(700, 100, 60 ,60);
    box10 = new Box(700, 100, 60 ,60);
    box11 = new Box(700, 100, 60 ,60);

    ball = new Wreck(320, 100, 60, 60);
    
    rope = new Rope(ball.body, {x:320, y:100});

}

function draw(){
    background("black");

    Engine.update(engine);
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();

    ball.display();

    rope.display();

}