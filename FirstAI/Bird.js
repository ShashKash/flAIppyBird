function Bird() {
  this.y = height/2;
  this.x = 50;

  this.gravity = 0.5;
  this.velocity = 0;

  this.brain = new NeuralNetwok(3,5,2);
  this.brain.initializeLayers();

  this.score = 0;
  this.fitness = 0;

  this.show = function() {
    stroke(255);
    fill(255, 50);
    ellipse(this.x, this.y, 32, 32);
  }

  this.update = function() {
    this.score++;

    this.y += this.velocity;
    this.velocity += this.gravity;
    this.velocity *= 0.95;

    if(this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if(this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }

  this.jump = function() {
    this.velocity += -15;
  }

  this.die = function() {
    noLoop();
  }

  this.nearestPipe = function(pipes) {
    var minDist = width;
    var pipeIndex = 0;
    var dist = width;
    for(var i=0; i < pipes.length; i++) {
      dist = pipes[i].x - this.x;
      if(dist < minDist && dist >= 0) {
        minDist = dist;
        pipeIndex = i;
      }
    }
    //little testing
    //print(minDist);
    return pipes[pipeIndex];
  }

  this.flywithAI = function(pipes) {

    var inputs = [ this.y/height , this.velocity/10 ,
                        this.nearestPipe(pipes).distFromBird(this)/width ,
                        this.nearestPipe(pipes).HoleUp/height , this.nearestPipe(pipes).HoleSize/height ];

    var prediction = this.brain.forward(inputs);

    //print(prediction);
    //print(prediction[0]+prediction[1]);

    if(prediction[0] > 0.5 ) {
      this.jump();
    }

  }

}
