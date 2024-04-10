
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var engine, world;
var block1, block2, block, plane;

function setup(){
	var canvas = createCanvas(550, 600);

	engine = Engine.create();
	world = engine.world;

	var plane_options = {
		isStatic: true
	}

}

plane = Bodies.rectangle(600, 580, 1200, 2, plane_options);
World.add(world, plane);

var block1_options ={
	restituiton: 0.5,
	friction: 0.02,
	frictionAir: 0

}
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



