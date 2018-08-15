function nextGeneration() {

  var ParentBird = deadBirds[calculateFitness(deadBirds)];
  //print(ParentBird.fitness);
  deadBirds = [];

  if(bestestFitBird.fitness > ParentBird.fitness){
    for(var x=0; x < population; x++){
      birds[x] = new Bird(bestestFitBird.brain);
    }
  }else{
    for(var x=0; x < population; x++){
      birds[x] = new Bird(bestestFitBird.brain);
    }
  }
}

function calculateFitness(DeadBirds) {
  var bestFit = 0;
  var bestBird = 0;
  for(let i=0; i < DeadBirds.length; i++) {
    DeadBirds[i].fitness = pow(DeadBirds[i].score, 2);
    if(bestFit < DeadBirds[i].fitness) {
      bestFit = DeadBirds[i].fitness;
      bestBird = i;
      print('current best fit ' + bestFit);
    }
  }
  if(bestestFitBird.fitness < bestFit){
    bestestFitBird = DeadBirds[bestBird];
    print('bestest fit = ' + bestestFitBird.fitness);
  }
  return bestBird;
}
