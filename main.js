/* main.js */
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const hexagons = [];
const HEX_COUNT = 80;

for(let i=0;i<HEX_COUNT;i++){
hexagons.push({
x: Math.random()*width,
y: Math.random()*height,
size: 20 + Math.random()*30,
dx: (Math.random()-0.5)*0.3,
dy: (Math.random()-0.5)*0.3,
angle: Math.random()Math.PI2
});
}

function drawHexagon(x, y, size, angle){
ctx.save();
ctx.translate(x, y);
ctx.rotate(angle);
ctx.beginPath();
for(let i=0;i<6;i++){
const a = Math.PI/3i;
ctx.lineTo(sizeMath.cos(a), size*Math.sin(a));
}
ctx.closePath();
ctx.strokeStyle = 'rgba(0,0,0,0.2)';
ctx.stroke();
ctx.restore();
}

function animate(){
ctx.clearRect(0,0,width,height);
hexagons.forEach(h=>{
h.x += h.dx;
h.y += h.dy;
h.angle += 0.001;
if(h.x>width) h.x=0;
if(h.x<0) h.x=width;
if(h.y>height) h.y=0;
if(h.y<0) h.y=height;
drawHexagon(h.x, h.y, h.size, h.angle);
});
requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', ()=>{
width = canvas.width = window.innerWidth;
height = canvas.height = window.innerHeight;
});
