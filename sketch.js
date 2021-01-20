const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var treeObject, stoneObject , groundObject, launcherObject;
var mango1;
var world, boy;
var slingshot;

function preload(){
	boy = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(1100, 100, 30);
	mango2 = new Mango(1000, 100, 30);
	mango3 = new Mango(1100, 200, 30);
	mango4 = new Mango(1000, 200, 30);

	treeObject = new Tree(1050, 580);
	groundObject = new Ground(width/2, 600, width, 20);
	stoneObject = new Stone(240, 430, 80, 80);

	slingshot = new SlingShot(stoneObject.body, {x: 300, y: 300});
	
	Engine.run(engine);
}

function draw() {
  background(230);

  image(boy, 200, 340, 200, 300);
  
  treeObject.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  groundObject.display();
  stoneObject.display();

  slingshot.display();
}

function mouseDragged() {
	Matter.Body.setPosition(stoneObject.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
	slingshot.fly();
}