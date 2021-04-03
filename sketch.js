const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var box1 , box2;
var ball1 , ball2 , ball3 ;
var iron1 ;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    box1 = new box(100,100,50,70);
    box2 = new box(600,100,90,40);
    ball1 = new ball(300,100,30,30);
    ball2 = new ball(360,100,50,30);
    ball3 = new ball(440,100,50,20);
    iron1 = new iron(800,100,100,50);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    box1.display();
    box2.display();
    ball1.display();
    ball2.display();
    ball3.display();
    iron1.display();
 
}