
function nextGeneration() {

  calculateFitness();

  deadBirds = [];
  for(var x=0; x < population; x++){
    birds[x] = new Bird();
  }
}

function calculateFitness() {
  var sumFit = 0;
  for(let bird in deadBirds) {
    sumFit += bird.score;
  }
  var bestFit = 0;
  var bestBird = 0;
  for(let i=0; i < deadBirds.length; i++) {
    deadBirds[i].fitness = Math.pow(deadBirds[i].score/sumFit, 2);
    if(bestFit < deadBirds[i].fitness) {
      bestFit = deadBirds[i].fitness;
      bestBird = i;
    }
  }
  return bestBird;
}
