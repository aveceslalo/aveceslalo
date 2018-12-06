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
var colors = [];
var constraints = [];
var boundaries = [];

var mousecons;

var contador = 0;
var canvas;



function setup() {
  rectMode(CENTER);
  canvas= createCanvas(window.innerWidth, window.innerHeight);

  engine = Engine.create();
  engine.world.gravity.y = 0.25;
  //engine.world.gravity.x = 0.05;

  balls.push( Bodies.rectangle(100, 100, 20, 20) );
  World.add(engine.world, balls );

  //console.log( balls[ 0 ] );

  ground = Bodies.rectangle(window.innerWidth/2, window.innerHeight - 20, window.innerWidth, 20, { isStatic: true });
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
  frameRate( 60 );

  background(255);
  noFill();
  stroke(0,0,255);

  for( var x = 0; x < balls.length; x++ ){
    for( var y = 0; y < balls.length; y++ ){

    rect( balls[ x ].position.x, balls[ y ].position.y, 50, 50);

    if(x>0){
      stroke(0,0,255);
      line(balls[x].position.x, balls[x].position.y, balls[x-1].position.x,balls[x-1].position.y );
    }

}
};



  //rect( ground.position.x+, ground.position.y-10, window.innerWidth, 20 );

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
    //miFuncion( whatever.pageX, whatever.pageY, balls[ 0 ] );

//  Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 0.05, y: 0});
  if(balls.length%3==0){
    var newBox = Bodies.rectangle(whatever.pageX, whatever.pageY, 50, 50,{isStatic:true});
  }else{
    var newBox = Bodies.rectangle(whatever.pageX, whatever.pageY, 50, 50);
  }

    balls.push( newBox );

    World.add( engine.world, newBox );

    if(balls.length >1){
      var options = {
        bodyA: balls[balls.length - 1],
        bodyB: balls[balls.length - 2],
        length : 100,
        stiffness: 0.4
      };

      var constraint = Constraint.create(options);
      World.add(engine.world, constraint)
    }
  });
});

function miFuncion( posX, posY, objeto ){
  Body.applyForce( objeto, {x: posX, y: posY}, {x: Math.random() * 0.009, y: Math.random() * 0.009});
}

/*setInterval( function(){
  var newBox = Bodies.rectangle(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 50, 50);
  balls.push( newBox );
  World.add( engine.world, newBox );
}, 500 );*/


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


$('.force').on('click', function () {
    Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 0.05, y: 0});
});*/
