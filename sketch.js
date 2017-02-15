//the connection radius.
var connectionField = 50;
var maxParticleRadius = 50;

var particleColor = {
  r: 127,
  g: 127,
  b: 127
};

function setup() {
  createCanvas(screen.width,screen.height);

  system = new ParticleSystem(createVector(width/2, 50));

}

function draw() {
  background("#15151d");

  system.addParticle();
  system.run();
}

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1,1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 155.0;

  this.size = random(maxParticleRadius);
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

Particle.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

Particle.prototype.display = function() {
  stroke(200, this.lifespan);
  strokeWeight(0);
  fill(particleColor.r, particleColor.g, particleColor.b, this.lifespan);
  ellipse(this.position.x, this.position.y, this.size, this.size);
};

Particle.prototype.getPosition = function() {
  return this.position;
};

Particle.prototype.isDead = function() {
  if(this.lifespan < 0) {
    return true;
  }
  else {
    return false;
  }
};

//-----------
var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
}

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(createVector(random(screen.width), random(screen.height))));
}


ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];

    //see if we are near any other particle. If so draw a connection.
    for (var j = this.particles.length-1; j >= 0; j--) {

      var pos = this.particles[j].getPosition();
      var dx = p.position.x - pos.x;
      var dy = p.position.y - pos.y;

      if((dx > -connectionField && dx < connectionField) && (dy > -connectionField && dy < connectionField) ) {
          stroke('rgba(255,255,255,0.25)');
          strokeWeight(1);
          line(p.position.x, p.position.y, pos.x, pos.y);

          //charge it up a bit.
        }
    }

    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};
