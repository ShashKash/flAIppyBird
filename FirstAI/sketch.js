var bird;
var pipes = [];
var prediction;

function setup() {
  createCanvas(640, 480);
  bird = new Bird();
  pipes.push(new Pipe());
  prediction = [0,0];
}

function draw() {
  background(0);

  prediction = bird.brain.forward([ bird.y, bird.velocity,
                      bird.nearestPipe(pipes).distFromBird(bird),
                      bird.nearestPipe(pipes).HoleUp, bird.nearestPipe(pipes).HoleSize ]);
  bird.update();
  bird.show();

  if(prediction[0]>0.5) {
    bird.jump();
  }

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

  // if(bird.decision[0] >= 0.5) {
  //   bird.jump();
  // }

}

// function keyPressed() {
//   if(key == ' '){
//     bird.jump();
//   }
// }
