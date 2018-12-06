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

var colors = [];

var mousecons;

var contador = 0;

var comete;

var canvas;



function setup() {
  rectMode(CENTER);
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  //console.log( canvas );

  engine = Engine.create();
  engine.world.gravity.y = 0.25;
  //engine.world.gravity.x = 0.05;

  //balls.push( Bodies.rectangle(100, 100, 20, 20) );
  World.add(engine.world, balls );

  //console.log( balls[ 0 ] );



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

      //comete = loadImage( "comete.png" );
      var contador = 0;

      for( var i = 0; i < 20; i++ ){
        for( var j = 0; j < 20; j++ ){
          if( j == 0 ){
            var newBox = Bodies.rectangle(350 + (i*30), j*30, 25, 25, {isStatic: true});
          }else{
          var newBox = Bodies.rectangle(350 + (i*30), j*30, 25, 25);
        }
          balls.push( newBox );

          circlu=Matter.Bodies.circle(635, 300, 400);

          World.add( engine.world, newBox, circlu );

          if( contador > 0 && j > 0){

            var options = {
              bodyA : balls[ contador - 1 ],
              bodyB : balls[ contador ],
              length : 30,
              stiffness : 0.9
            };

            var constraint = Constraint.create( options );
            World.add( engine.world, constraint );

            if( i > 0 ){
              var options = {
                bodyA : balls[ contador - 20 ],
                bodyB : balls[ contador ],
                length : 30,
                stiffness : 0.4
              };

              var constraint = Constraint.create( options );
              World.add( engine.world, constraint );
            }

        }//if j > 0
        contador++;

        }//j
      }//i



}//setup

function eventF( e ){
  console.log( e );
}

function draw() {

  frameRate( 60 );


  background(255);
  fill(0,23,220);
  noStroke();
  ellipse(635,300,400,400);
  fill(255,255,255);
  stroke(255,0,0);

  //rectMode(CORNER);
  //fill(0,0,0,5);
  //stroke(1);
  //rect(0, 0, window.innerWidth, window.innerHeight );


  for( var i = 0; i < balls.length; i++ ){
    //rect( balls[ i ].position.x, balls[ i ].position.y, 50, 50 );
    //fill( colors[ i ][ 0 ], colors[ i ][ 1 ], colors[ i ][ 2 ] );
    fill(255,255,255);
    beginShape();
    for( var j = 0; j < balls[ i ].vertices.length; j++ ){
      vertex( balls[ i ].vertices[ j ].x, balls[ i ].vertices[ j ].y );
    }
    endShape();
  }

    var contador = 0;
    stroke( 255,0,0 );

    for( var i = 0; i < 20; i++ ){
      for( var j = 0; j < 20; j++ ){
    if( contador > 0 && j > 0){
      line( balls[ contador ].position.x, balls[ contador ].position.y, balls[ contador - 1 ].position.x, balls[ contador - 1 ].position.y );

      if( i > 0 ){
        line( balls[ contador ].position.x, balls[ contador ].position.y, balls[ contador - 20 ].position.x, balls[ contador - 20 ].position.y );
      }
    }//if j > 0

  contador++;
}//j
}//i

    /*if( i > 0 ){
      stroke(255);
      line( balls[ i ].position.x, balls[ i ].position.y, balls[ i - 1 ].position.x,
        balls[ i - 1 ].position.y );
    }*/




  //rect( ground.position.x, ground.position.y, window.innerWidth, 20 );

Engine.update( engine );
//Matter.MouseConstraint.update(engine);

}//draw

//$( document ).ready( function(){
  //$( document ).click( function( whatever ){

    //console.log( MouseConstraint );
    //console.log( whatever );
    //for( var i = 0; i < balls.length; i++ ){
      //Body.applyForce( balls[ 0 ], {x: whatever.pageX, y: whatever.pageY}, {x: 0.005, y: 0});
    //}
    //miFuncion( whatever.pageX, whatever.pageY, balls[ i ] );

    //Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 0.05, y: 0});
    /*if( balls.length % 3 == 0 ){
    var newBox = Bodies.rectangle(whatever.pageX, whatever.pageY, Math.random() * 100, Math.random() * 100, {isStatic: true});
  }else{
    var newBox = Bodies.rectangle(whatever.pageX, whatever.pageY, Math.random() * 100, Math.random() * 100);
  }
    //var newBox = Bodies.rectangle(whatever.pageX, whatever.pageY,100,100);
    balls.push( newBox );
    colors.push( [ Math.round( Math.random() * 255 ), Math.round( Math.random() * 255 ), Math.round( Math.random() * 255 )] );
    console.log( newBox );
    World.add( engine.world, newBox );

    if( balls.length > 1 ){
      var options = {
        bodyA : balls[ balls.length - 1 ],
        bodyB : balls[ balls.length - 2 ],
        length : 100,
        stiffness : 0.4
      };

      var constraint = Constraint.create( options );
      World.add( engine.world, constraint );
    }//if balls.length > 1
*/
  //});
//});

/*function miFuncion( posX, posY, objeto ){
  Body.applyForce( objeto, {x: posX, y: posY}, {x: Math.random() * 0.009, y: Math.random() * 0.009});
}*/


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
