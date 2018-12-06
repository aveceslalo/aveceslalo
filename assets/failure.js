var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies= Matter.Bodies;
    Constraint = Matter.Constraint;
    Body = Matter.Body;



var engine;

var ground;
var tops;
var balls = [];
var constraints = [];

var postion = [];

var contador = 0;

//Matter.Resolver._restingThresh = 0.1;

var y ;

function setup(){

  createCanvas(window.innerWidth,window.innerHeight);

  engine = Engine.create();


  console.log(engine);
  rectMode(CENTER);

  //balls.push(Bodies.rectangle(100,100,20,20));
  World.add(engine.world,balls);

  //console.log(balls[0].position);


  ground = Bodies.rectangle(window.innerWidth/2,window.innerHeight, window.innerWidth,10,{isStatic:true});
  World.add(engine.world,ground);

  tops = Bodies.rectangle(window.innerWidth/2,0, window.innerWidth,10,{isStatic:true});
  World.add(engine.world,tops);




  //Engine.run(engine);

}

function draw(){
  frameRate(60);
  background(255);

  noStroke();


  //console.log(balls[0].position);
  //rect(balls[0].position.x, balls[0].position.y,20,20);


  for(var i = 0; i<balls.length; i++){
    if( balls[i].tipo == "arriba" ){
      stroke(255,45,0);
      noFill();
      rect( balls[i].position.x, balls[i].position.y, 30, 30);
    }else{
      stroke(0,45,255);
      noFill();
      ellipse( balls[i].position.x, balls[i].position.y, 30, 30);
    }

  }





  noFill();
  noStroke();


  rect(tops.position.x, tops.position.y, window.innerWidth,15);
  rect(ground.position.x, ground.position.y, window.innerWidth,15);
  Engine.update(engine);
}

$(document).ready(function() {
  $(document).click(function(evento){

console.log(evento.clientY);
  if(evento.clientY<350){
  var newBox = Bodies.rectangle(evento.pageX,evento.pageY,30,30);
  newBox.tipo = "arriba";
  balls.push(newBox);
  engine.world.gravity.y=-1;
  World.add(engine.world, newBox);


}
else{
  var newBox = Bodies.rectangle(evento.pageX,evento.pageY,30,30);
  newBox.tipo = "abajo";
  balls.push(newBox);
 engine.world.gravity.y=1;
  World.add(engine.world, newBox);

}


});

});
