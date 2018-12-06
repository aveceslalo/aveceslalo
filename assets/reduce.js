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
var balls = [];
var constraints = [];
var boundaries = [];

var mousecons;

var contador = 0;
var canvas;



function setup() {
  rectMode(CENTER);
  canvas= createCanvas(window.innerWidth, window.innerHeight);

  engine = Engine.create();
  engine.world.gravity.x = 0;
  engine.world.gravity.y = 0.001;

  balls.push( Bodies.rectangle(50, 50, 50, 50) );
  World.add(engine.world, balls );

  //console.log( balls[ 0 ] );

  ground = Bodies.rectangle(window.innerWidth/2, window.innerHeight , window.innerWidth, 10, { isStatic: true });
  World.add(engine.world, ground );

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
              stiffness: 0.9,
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
  frameRate( 60 );

  background(255);
  noFill();
  stroke(230,33,33);

  for( var i = 0; i < balls.length; i++ ){
    rect( balls[ i ].position.x, balls[ i ].position.y, 50, 50 );
  }
  noFill();
  stroke(20,33,233);

  //rect( ground.position.x, ground.position.y, window.innerWidth, 20 );




Engine.update( engine );
//Matter.MouseConstraint.update(engine);
}//draw

$( document ).ready( function(){
  $( document ).click( function( whatever ){

    console.log( MouseConstraint );
    console.log( whatever );
    for( var i = 0; i < balls.length; i++ ){
      Body.applyForce( balls[ 0 ], {x: whatever.pageX, y: whatever.pageY}, {x: 0.0005, y: 0});
    }
    miFuncion( whatever.pageX, whatever.pageY, balls[ 0 ] );

  Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 0.5, y: 2});
  var newBox = Bodies.rectangle(whatever.pageX, whatever.pageY, 50, 50);
    balls.push( newBox );
    World.add( engine.world, newBox );
  });
});

function miFuncion( posX, posY, objeto ){
  Body.applyForce( objeto, {x: posX, y: posY}, {x: Math.random() * 0.9, y: Math.random() * 0.9});
}

setInterval( function(){
  var newBox = Bodies.rectangle(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 50, 50);
  balls.push( newBox );
  World.add( engine.world, newBox );
}, 5 );


/*setInterval( function(){
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


}, 500);*/

/*$('.force').on('click', function () {
    Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 0.05, y: 0});
});*/
