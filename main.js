const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
width = canvas.width = window.innerWidth;
height = canvas.height = window.innerHeight;
initParticles();
});

const particleCount = 80;
const particles = [];

class Particle {
constructor() {
this.reset();
}

reset() {
this.x = Math.random() * width;
this.y = Math.random() * height;
this.vx = (Math.random() - 0.5) * 0.8;
this.vy = (Math.random() - 0.5) * 0.8;
this.size = Math.random() * 20 + 10;
this.opacity = Math.random() * 0.5 + 0.2;
}

update() {
this.x += this.vx;
this.y += this.vy;

if (this.x < -50 || this.x > width + 50 || this.y < -50 || this.y > height + 50) {
  this.reset();
}

}

draw(ctx) {
ctx.save();
ctx.globalAlpha = this.opacity;
ctx.strokeStyle = '#222';
ctx.lineWidth = 2;
ctx.beginPath();
for (let i = 0; i < 6; i++) {
const angle = Math.PI / 3 * i;
const x = this.x + this.size * Math.cos(angle);
const y = this.y + this.size * Math.sin(angle);
if (i === 0) ctx.moveTo(x, y);
else ctx.lineTo(x, y);
}
ctx.closePath();
ctx.stroke();
ctx.restore();
}
}

function initParticles() {
particles.length = 0;
for (let i = 0; i < particleCount; i++) {
particles.push(new Particle());
}
}

function animate() {
ctx.clearRect(0, 0, width, height);
particles.forEach(p => {
p.update();
p.draw(ctx);
});
requestAnimationFrame(animate);
}

// Interactive hover effect
canvas.addEventListener('mousemove', e => {
particles.forEach(p => {
const dx = p.x - e.clientX;
const dy = p.y - e.clientY;
const dist = Math.sqrt(dx * dx + dy * dy);
if (dist < 100) {
p.vx += dx * 0.0005;
p.vy += dy * 0.0005;
}
});
});

initParticles();
animate();

// Optional: simulate “user echo” effect when typing in input
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
input.addEventListener('input', () => {
particles.forEach(p => {
p.opacity = Math.min(p.opacity + 0.05, 0.9);
});
});
});
