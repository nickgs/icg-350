const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

// Think of the ctx as our toolbox.

const mouse = {
    x: null,
    y: null
}

let particleArray = []; // Empty list of particles

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

canvas.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;

    for(let i = 0; i < 10; i++) {
        particleArray.push(new Particle());
    }
})

function drawCircle() {
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2);
    ctx.fill();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
   
    for(let i = 0; i < particleArray.length; i++) {
        // we want to update and draw our particle.
        particleArray[i].update();
        particleArray[i].draw();
    }

    requestAnimationFrame(animate);
}

drawCircle();
animate();

// Describe a single particle.
class Particle {

    constructor() {
        // describe aspects of our particle.
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 5;
        this.speedX = Math.random() * 3;
        this.speedY = Math.random() * 3;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if(this.size > 0.2) {
            this.size -= 0.1;
        }
    }

    draw() {
        ctx.fillStyle = 'rgba(255,0,0, .3)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for(let i = 0; i < 100; i++) {
        particleArray.push(new Particle());
    }

}

init();
