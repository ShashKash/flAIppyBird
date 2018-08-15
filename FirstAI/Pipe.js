function Pipe() {
  this.HoleUp = random(height/2);
  this.HoleDown = height - this.HoleUp - 250;//From the bottom of the Canvas
  this.HoleSize = (height-this.HoleDown) - this.HoleUp;

  this.width = 50;
  this.x = width;
  this.speed = 5;

  this.show = function() {
    fill(255);
    rect(this.x, 0, this.width, this.HoleUp);
    rect(this.x, height-this.HoleDown, this.width, this.HoleDown);
  }

  this.update = function() {
    this.x += -this.speed;
  }

  this.offScreen = function() {
    if((this.x + this.width) < 0){
      return true;
    }
  }

  this.hitBird = function(bird) {
    if( ( bird.y > height- this.HoleDown || bird.y < this.HoleUp)) {
      if( this.x - bird.x == 20){
      return true;
      }
    }
  }

  this.distFromBird = function(bird) {
    var Dist = this.x - bird.x;
    return Dist;
  }

}
