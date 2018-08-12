function Bird() {
  this.y = height/2;
  this.x = 50;

  this.gravity = 0.5;
  this.velocity = 0;

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

}
