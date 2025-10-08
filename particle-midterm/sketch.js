// you have to initialize an array with empty square brackets
let particleSystems = [];

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(100);
  
  for(let i = 0; i < particleSystems.length; i++) {
    let ps = particleSystems[i]
    ps.update()
  }
  
  textSize(40)
  fill(0)
  text(particleSystems.length, 50, 50)
}

// we're making fireworks!
class ParticleSystem {
  constructor(xPos, yPos) {
    this.numParticles = random(50, 200)
    this.pos = createVector(xPos, yPos)
    this.gravity = random(0.01, 0.1)
    this.color = color(random(255), random(255), random(255))
    this.particles = [];
    
    for(let i = 0; i < this.numParticles; i++) {
      this.particles.push(new Particle(this.pos.x, this.pos.y, this.gravity, this.color))
    }
  }
  
  update() {
    for(let i = 0; i < this.particles.length; i++) {
      let p = this.particles[i]
      
      p.update();
      p.draw();
      
      if(p.alive == false) {
        this.particles.splice(i, 1)
      }
    }
  }  
}

class Particle {
  
  constructor(xPos, yPos, gravity, color) {
    this.pos = createVector(xPos, yPos)
    this.vel = createVector(random(-5, 5), random(-5, 5))
    this.acc = createVector(0, gravity)
    this.size = random(4, 10)
    this.color = color
    this.alive = true;
  }
  
  update() {
    this.pos.add(this.vel)
    this.vel.add(this.acc) // add the "gravity" from the parent particle system
    this.checkWalls();
  }
  
  draw() {
    fill(this.color)
    noStroke()
    circle(this.pos.x, this.pos.y, this.size)
  }
  
  checkWalls() {
    if(this.pos.x < 0 || 
       this.pos.x > width ||
       this.pos.y < 0 ||
       this.pos.y > height) {
      
       this.alive = false;
    }
  }
}

function mousePressed() {
  particleSystems.push(new ParticleSystem(mouseX, mouseY));
}













