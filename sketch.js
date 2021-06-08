var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;


function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = -50; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,50));
  }

  //create 2nd row of plinko objects
  for (var j = -70; j <=width; j=j+50){
    plinkos.push(new Plinko(j,150));
  }

  //create 3rd row of plinko objects
   for(var j = -50 ; j<=width; j=j+50){
     plinkos.push(new Plinko(j,250));
   }
  
  //create 4th row of plinko objects
  for(var j = -80 ; j<=width ; j=j+50){
    plinkos.push(new Plinko(j,350));
  }
   
   
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();

  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if(frameCount % 90===0){
    particles.push(new Particles(random(15,650),10,10));
  }
  //display the particles 
  for(var m = 0;m < particles.length; m++){
    particles[m].display();
  }

 // drawSprites();

}