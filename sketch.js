const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1


function preload() {

}

function setup(){
    createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 600, 1200, 20);
    //platform = new Ground(150, 305, 300, 170);
    bobObject1 = new Bob(250,300);
    box1 = new Cube(900, 100, 70, 70);
    box2 = new Cube(900, 100, 70, 70);
    box3 = new Cube(900, 100, 70, 70);
    box4 = new Cube(900, 100, 70, 70);
    box5 = new Cube(900, 100, 70, 70);
    box6 = new Cube(900, 100, 70, 70);
    box7 = new Cube(800, 100, 70, 70);
    box8 = new Cube(800, 100, 70, 70);
    box9 = new Cube(800, 100, 70, 70);
    box10 = new Cube(800, 100, 70, 70);
    box11 = new Cube(800, 100, 70, 70);
    box12 = new Cube(800, 100, 70, 70);
    box13 = new Cube(700, 100, 70, 70);
    box14 = new Cube(700, 100, 70, 70);
    box15 = new Cube(700, 100, 70, 70);
    box16 = new Cube(700, 100, 70, 70);
    box17 = new Cube(700, 100, 70, 70);
    box18 = new Cube(700, 100, 70, 70);
    box19 = new Cube(700, 100, 70, 70);
    box20 = new Cube(700, 100, 70, 70);

    point = new Point(bobObject1.body, { x: 700, y: 50 });

}

function draw(){
    background(180)
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()

    ground.display();

    bobObject1.display();
    point.display();
}

function mouseDragged() {
    Matter.Body.setPosition(bobObject1.body, { x: mouseX, y: mouseY });
  }