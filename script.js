// ===========================
// KUBUS GRAY TRANSPARAN + GLITTER
// ===========================

const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

const cubes = [];
const cubeSize = 50;
const spacing = 80;

// Generate cubes
for(let y=0; y<height+cubeSize; y+=spacing){
  for(let x=0; x<width+cubeSize; x+=spacing){
    cubes.push({x:x + Math.random()*20, y:y + Math.random()*20, angle: Math.random()*Math.PI*2});
  }
}

// Generate glitter
const glitters = [];
for(let i=0;i<80;i++){
  glitters.push({
    x: Math.random()*width,
    y: Math.random()*height,
    r: 1+Math.random()*3,
    hue: Math.random()*360
  });
}

// Animate
function animate() {
  ctx.clearRect(0,0,width,height);

  // Draw cubes
  cubes.forEach(c=>{
    const newX = c.x + Math.cos(c.angle + performance.now()/4000)*10;
    const newY = c.y + Math.sin(c.angle + performance.now()/4000)*10;
    ctx.fillStyle = "rgba(128,128,128,0.3)";
    ctx.fillRect(newX, newY, cubeSize, cubeSize);
  });

  // Draw glitters
  glitters.forEach(g=>{
    ctx.beginPath();
    ctx.arc(g.x + Math.sin(performance.now()/1000+g.hue)*10, g.y + Math.cos(performance.now()/1000+g.hue)*10, g.r, 0, Math.PI*2);
    ctx.fillStyle = `hsl(${g.hue},100%,70%)`;
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();

// ===== PORTAL BUTTON =====
const portalBtn = document.getElementById("portal-btn");
const encodedLink = btoa("https://idn-chat.pages.dev/folder/"); // Base64

portalBtn.addEventListener("click", ()=>{
  const decoded = atob(encodedLink);
  window.location.href = decoded;
});
