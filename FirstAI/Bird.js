function Bird() {
  this.y = height/2;
  this.x = 50;

  this.gravity = 0.5;
  this.velocity = 0;

  this.brain = new NeuralNetwok(3,3,2);
  this.brain.initializeLayers();

  // this.decision = [0,0];

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  }

  this.update = function() {
    this.y += this.velocity;
    this.velocity += this.gravity;
    this.velocity *= 0.95;

    if(this.y > height) {
      this.y = height;
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
    var dist = width;
    for(var i=0; i < pipes.length; i++) {
      dist = pipes[i].x - this.x;
      if(dist < minDist) {
        minDist = dist;
      }
    }
    return minDist;
  }

}
