var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	body1 = Bodies.rectangle(400, 650, 200, 20, {isStatic:false});
	World.add(world, body1);
	
	body2 = Bodies.rectangle(311, 550, 20, 120, {isStatic:false});
	World.add(world, body2);

	body3 = Bodies.rectangle(489, 550, 20, 120, {isStatic:false});
	World.add(world, body3);
	 
	

	Engine.run(engine);
  
}


function draw() {

Engine.update(engine);

  rectMode(CENTER);
  background(0);

  rect(body1.position.x, body1.position.y, 200, 20);
  rect(body2.position.x, body3.position.y, 20, 120);
  rect(body3.position.x, body3.position.y, 20, 120);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody, false);
    
  }
}



