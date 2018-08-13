var bird;
var pipes = [];

function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  pipes.push(new Pipe());
  prediction = [0,0];
}

function draw() {
  background(0);


  bird.update();
  bird.show();
  bird.flywithAI(pipes);

  if(frameCount % 80 == 0) {
    pipes.push(new Pipe());
  }

  for(var i = pipes.length-1 ; i >= 0 ; i--) {
      pipes[i].update();
      pipes[i].show();

      if(pipes[i].hitBird(bird)){
        bird.die();
      }

      if(pipes[i].offScreen()) {
        pipes.splice(i, 1);
      }
  }

}

// function keyPressed() {
//   if(key == ' '){
//     bird.jump();
//   }
// }
