var Engine = Matter.Engine;
    var Render = Matter.Render;
    var World = Matter.World;
    var Bodies = Matter.Bodies;
    var Constraint = Matter.Constraint;
    var Body =  Matter.Body;

    var engine;
    var ground;
    var balls = [];
    var constraints = [];
    //var wall;
    //var wall2;
    //var wall0;
    var techo;

    var contador = 0;

    Matter.Resolver._restingThresh = 0.1;

    function setup() {
    	createCanvas(window.innerWidth, window.innerHeight);
      rectMode(CENTER);
    	engine = Engine.create();
      //engine.world.gravity.y = 0.25;

    for (var i=0; i<100; i++) {
      var newBall = Bodies.rectangle(Math.floor(Math.random()*window.innerWidth), 600,  100, 50);
      balls.push(newBall);
      World.add(engine.world, newBall);
    }
      //balls.push(Bodies.rectangle(100, 100, 20, 20));
      //World.add(engine.world, balls);

      ground = Bodies.rectangle(window.innerWidth/2, window.innerHeight, window.innerWidth, 30, {isStatic: true});

      techo = Bodies.rectangle(window.innerWidth/2, 0, window.innerWidth, 30, {isStatic: true});

      engine.world.gravity.y = 0.5;

      //wall0 = Bodies.rectangle(0, window.innerHeight/2, 30, window.innerHeight, {isStatic: true});

      //wall = Bodies.rectangle(window.innerWidth/2, window.innerHeight/2, 30, window.innerHeight, {isStatic: true});

      //wall2 = Bodies.rectangle(window.innerWidth, window.innerHeight/2, 30, window.innerHeight, {isStatic: true});
      World.add(engine.world, [balls, ground, techo]);
    }

    function draw() {
      //frameRate(60);
      Engine.update(engine);
      //background(0);
      fill(255);
      rect(window.innerWidth/2, window.innerHeight/2, window.innerWidth, window.innerHeight);
    noFill();
      stroke(0,100,230);
      //console.log(balls[0].position);
      for (var i=0; i<balls.length; i++) {
          ellipse(balls[i].position.x, balls[i].position.y, 90, 90);
          //miFunction(evento.pageX, evento.pageY, balls[i]);
      }


      //rect(ground.position.x, ground.position.y, window.innerWidth, 10);
    //  rect(wall.position.x, wall.position.y, 30, window.innerHeight);
      //rect(wall2.position.x, wall2.position.y, 30, window.innerHeight);
    }

    $(document).ready(function() {
      $(document).click(function(evento) {
        console.log(evento);
        /*for (var i = 0; i < balls.length; i++) {
          miFunction(evento.pageX, evento.pageY, balls[i]);
        }*/
        var newBox = Bodies.circle(evento.pageX, evento.pageY, 50, 50);
        balls.push(newBox);
        World.add(engine.world, newBox);

        /*for (var i = 0; i < balls.length; i++) {
            Body.applyForce(balls[i+1], {x: evento.pageX, y: evento.pageY}, {x: 0.005, y: 0});
        }*/

        var obs = Bodies.cirlce(evento.pageX, evento.pageY, 10, 90, {isStatic:true});
        constraints.push(obs);
        World.add(engine.world, obs);
      });
    });

    function miFunction( posX, posY, objeto) {
      //console.log(posX + ", " + posY);
      Body.applyForce(objeto, {x: posX, y: posY}, {x: Math.random() * 0.009, y: Math.random() * 0.009})
    }

    setInterval( function(){
    //  console.log("Hola amigos");
      for (var i = 0; i < balls.length; i++) {
        Body.applyForce(
            balls[i],
          {
            x: window.innerWidth/2,
            y: window.innerHeight/2
          },
          {
            x: -0.009 +  (Math.random()* 0.018),
            y: -0.009 + (Math.random()* 0.018)
          }
        );
      }
    }, 500);
