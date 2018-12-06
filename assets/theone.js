var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Body = Matter.Body;
var Constraint = Matter.Constraint;
var MouseConstraint = Matter.MouseConstraint;
var Mouse = Matter.Mouse;
var Bounds = Matter.Bounds;

var engine;

var ground;
var ground2;
var choque1;
var choque2;
var choque3;
var choque4;
var choque5;
var choque6;
var choque7;
var choque8;
var choque9;
var choque10;

var balls = [];
var constraints = [];
var colors =[];
var boundaries = [];

var mousecons;

var contador = 0;

var canvas;




function setup() {
  rectMode(CENTER);
  canvas= createCanvas(window.innerWidth, window.innerHeight);

  engine = Engine.create();
  engine.world.gravity.y = - 0.4 + (Math.random()*0.1);
  engine.world.gravity.x= random(-1,2);
  //engine.world.gravity.x = 0.05;

  //balls.push( Bodies.rectangle(100, 100, 20, 20) );
  World.add(engine.world, balls );

  //console.log( balls[ 0 ] );

  ground = Bodies.rectangle(window.innerWidth/2, window.innerHeight - 20, window.innerWidth, 20, { isStatic: true });
  //World.add(engine.world, ground );
  ground2 = Bodies.rectangle(window.innerWidth/2,30, window.innerWidth,10,{isStatic:true});
  //World.add(engine.world, ground2 );

  choque1 = Bodies.rectangle(random(0,1100),random(0,650), 20,20,{isStatic:true});
  World.add(engine.world, choque1 );
  choque2 = Bodies.rectangle(random(0,1100),random(0,650), 20,20,{isStatic:true});
  World.add(engine.world, choque2 );
  choque3 = Bodies.rectangle(random(0,1100),random(0,650), 20,20,{isStatic:true});
  World.add(engine.world, choque3 );
  choque4 = Bodies.rectangle(random(0,1100),random(0,650), 20,20,{isStatic:true});
  World.add(engine.world, choque4 );
  choque5 = Bodies.rectangle(random(0,1100),random(0,650), 20,20,{isStatic:true});
  World.add(engine.world, choque5 );
  choque6 = Bodies.rectangle(random(0,1100),random(0,650), 20,20,{isStatic:true});
  World.add(engine.world, choque6 );
  choque7 = Bodies.rectangle(random(0,1100),random(0,650), 20,20,{isStatic:true});
  World.add(engine.world, choque7 );
  choque8 = Bodies.rectangle(random(0,1100),random(0,650), 20,20,{isStatic:true});
  World.add(engine.world, choque8 );
  choque9 = Bodies.rectangle(random(0,1100),random(0,650), 20,20,{isStatic:true});
  World.add(engine.world, choque9 );
  choque10 = Bodies.rectangle(random(0,1100),random(0,650), 20,20,{isStatic:true});
  World.add(engine.world, choque10 );
  //ground3 = Bodies.rectangle(window.innerWidth/2,10, window.innerWidth,window.innerHeight -10,{isStatic:true});
  //World.add(engine.world, ground3 );

  //var mouseConstraint = MouseConstraint.create(engine);
  //World.add(engine.world, mouseConstraint);

  console.log( ground );

  //Matter.MouseConstraint.create(engine.world);
  //console.log( Matter.MouseConstraint );
  //Matter.MouseConstraint.mouse.mouseup(eventF);

  var canvas = document.getElementById( "defaultCanvas0" );

  var mouse = Mouse.create(canvas.elt),
      mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
              stiffness: 0.2,
              render: {
                  visible: false
              }
          }
      });

      World.add(engine.world, mouseConstraint);


}//setup

function eventF( e ){
  console.log( e );
}

function draw() {
  fill(0);
  frameRate( 60 );
  strokeWeight(.1)

  //background(0);

  noFill();

  for( var i = 0; i < balls.length; i++){
    //rect( balls[ i ].position.x, balls[ i ].position.y, 50, 50 );
    stroke(40+Math.random()*90,0,240+Math.random()*10);
    beginShape();
    for(var j = 0; j < balls[i].vertices.length; j++){
      vertex(balls[i].vertices[j].x,balls[i].vertices[j].y);
    }
    endShape();
  }



Engine.update( engine );
//Matter.MouseConstraint.update(engine);
}//draw

$( document ).ready( function(){
  $( document ).click( function( whatever ){

    console.log( MouseConstraint );
    //console.log( whatever );
    //for( var i = 0; i < balls.length; i++ ){
      //Body.applyForce( balls[ 0 ], {x: whatever.pageX, y: whatever.pageY}, {x: 0.005, y: 0});
    //}
  //  miFuncion( whatever.pageX, whatever.pageY, balls[ 0 ] );

    //Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 0.05, y: 0});
    var newBox = Bodies.rectangle(whatever.pageX, whatever.pageY, Math.random()*20,Math.random()*650);
    balls.push( newBox );
    colors.push([Math.round(Math.random()*1),Math.round(Math.random()*1),Math.round(Math.random()*1)]);
    World.add( engine.world, newBox );
  });
});

function miFuncion( posX, posY, objeto ){
  Body.applyForce( objeto, {x: posX, y: posY}, {x: Math.random() * 0.009, y: Math.random() * 0.009});
}





setInterval( function(){
  for( var i = 0; i < balls.length; i++ ){
    Body.applyForce(
      balls[ i ],
      {//punto de origen de la fuerza
        x: window.innerWidth/2,
        y: window.innerHeight/2
      },
      {//dirección de la fuerza
        x: ( -0.004 + (Math.random() * 0.008) ),
        y: ( -0.004 + (Math.random() * 0.008) )
      }
    );
  }//for


}, 500);

/*$('.force').on('click', function () {
    Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 0.05, y: 0});
});*/
