const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine
var world
var ground,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19
var destroyer,sling

function setup()
{
    createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,600,1200,20);

    b1 = new Box(600,200,50,50);
    b2 = new Box(600,200,50,50);
    b3 = new Box(600,200,50,50);
    b4 = new Box(600,200,50,50);
    b5 = new Box(600,100,50,50);
    b6 = new Box(600,100,50,50);
    b7 = new Box(600,100,50,50);
    b8 = new Box(600,100,50,50);
    b9 = new Box(600,100,50,50);
    b10 = new Box(600,50,50,50);
    b11 = new Box(800,50,50,50);
    b12 = new Box(800,50,50,50);
    b13 = new Box(1000,50,50,50);
    b14 = new Box(800,50,50,50);
    b15 = new Box(800,50,50,50);
    b16 = new Box(800,50,50,50);
    b17 = new Box(800,50,50,50);
    b18 = new Box(800,50,50,50);
    b19 = new Box(800,50,50,50);

    destroyer = new Ball(200,200,80,80);
    sling = new Slingshot(destroyer.body,{x:300,y:50})

}
function draw()
{
    background("violet");

    Engine.update(engine);

    ground.display();    
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    destroyer.display();
    sling.display();
    

}
function mouseDragged()
{
    Matter.Body.setPosition(destroyer.body,{x:mouseX,y:mouseY});
}