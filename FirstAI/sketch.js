const population = 10;
const mutationRateBird = 0.2;
var birds = [];
var deadBirds = [];
var pipes = [];
var bestestFitBird;

function setup() {
  createCanvas(640, 480);

  for(var i=0; i < population; i++) {
    birds[i] = new Bird();
  }

  bestestFitBird = new Bird();
  pipes.push(new Pipe());
  prediction = [0,0];

  frameRate(50);
}

function draw() {
  background(0);

  for(let bird of birds) {
    bird.update();
    bird.show();
    bird.flywithAI(pipes);
  }

  if(birds.length === 0){
    nextGeneration(deadBirds);
  }

  if(frameCount % 80 == 0) {
    pipes.push(new Pipe());
  }

  for(var i = pipes.length-1 ; i >= 0 ; i--) {
      pipes[i].update();
      pipes[i].show();

      for(var j=birds.length-1; j >= 0; j--) {
        if(pipes[i].hitBird(birds[j])) {
          deadBirds.push(birds.splice(j, 1)[0]);
        }
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
