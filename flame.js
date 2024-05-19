let particles = [];

function setup() {
    let canvas = createCanvas(windowWidth, 400);
    canvas.parent('flame-container');
    noStroke();
}

function draw() {
    background(0);
    for (let i = 0; i < 5; i++) {
        particles.push(new Particle());
    }
    
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
            particles.splice(i, 1);
        }
    }
}

class Particle {
    constructor() {
        this.x = width / 2;
        this.y = height;
        this.vx = random(-1, 1);
        this.vy = random(-3, -1);
        this.alpha = 255;
    }
    
    finished() {
        return this.alpha < 0;
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
    }
    
    show() {
        noStroke();
        fill(255, this.alpha, 0, this.alpha);
        ellipse(this.x, this.y, 16);
    }
}