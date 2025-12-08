// ===========================
// FULL UNLEASHED IDN UNIVERSE SCRIPT
// ===========================

// ===== CANVAS HEXAGON MESH BACKGROUND =====
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

const hexGrid = [];
const hexSize = 40;
const hexSpacing = Math.sqrt(3) * hexSize / 2;

// Generate hex grid
for(let y=0; y<height + hexSize; y+=hexSpacing){
  for(let x=0; x<width + hexSize; x+=hexSize*1.5){
    hexGrid.push({x:x + Math.random()*10, y:y + Math.random()*10, angle: Math.random()*Math.PI*2, colorOffset: Math.random()*360});
  }
}

// Animate hex mesh
function animateHex() {
  ctx.clearRect(0,0,width,height);
  
  hexGrid.forEach(hex => {
    const {x, y, angle, colorOffset} = hex;
    const newX = x + Math.cos(angle + performance.now()/5000)*10;
    const newY = y + Math.sin(angle + performance.now()/5000)*10;
    drawHex(newX, newY, hexSize, colorOffset);
  });
  
  requestAnimationFrame(animateHex);
}

function drawHex(x, y, size, hue){
  ctx.beginPath();
  for(let i=0;i<6;i++){
    const angle = Math.PI/3*i;
    const px = x + size*Math.cos(angle);
    const py = y + size*Math.sin(angle);
    if(i===0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.strokeStyle = `hsl(${(hue + performance.now()/50)%360}, 80%, 50%)`;
  ctx.lineWidth = 2;
  ctx.stroke();
}

animateHex();

// ===== HERO LOGIN FLOATING HOLOGRAM =====
const avatarBox = document.querySelector(".login-box");
avatarBox.addEventListener("mousemove", e => {
  const rect = avatarBox.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width/2;
  const y = e.clientY - rect.top - rect.height/2;
  avatarBox.style.transform = `rotateY(${x/8}deg) rotateX(${-y/8}deg)`;
});
avatarBox.addEventListener("mouseleave", () => {
  avatarBox.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

// Floating hologram particles inside hero
const createHoloParticles = (container, count=50) => {
  for(let i=0;i<count;i++){
    const p = document.createElement("div");
    p.className = "holo-particle";
    p.style.position = "absolute";
    p.style.width = `${2+Math.random()*5}px`;
    p.style.height = p.style.width;
    p.style.borderRadius = "50%";
    p.style.background = `hsl(${Math.random()*360}, 100%, 70%)`;
    p.style.top = `${Math.random()*100}%`;
    p.style.left = `${Math.random()*100}%`;
    p.style.opacity = Math.random();
    p.style.transition = "all 0.5s linear";
    container.appendChild(p);
  }
};
createHoloParticles(avatarBox, 60);

// ===== ELASTIC BUBBLES INTERACTIVE =====
const bubbles = document.querySelectorAll(".bubble");
bubbles.forEach(bubble => {
  bubble.addEventListener("mousemove", e => {
    const rect = bubble.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width/2);
    const dy = e.clientY - (rect.top + rect.height/2);
    bubble.style.transform = `scale(1.3) translate(${dx*0.05}px, ${dy*0.05}px) rotate(${dx+dy}deg)`;
  });
  bubble.addEventListener("mouseleave", () => {
    bubble.style.transform = "scale(1) translate(0,0) rotate(0deg)";
  });
});

// ===== SCROLL-BASED PARALLAX =====
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  document.querySelector(".cloud-container").style.transform = `translateY(${scroll*0.08}px)`;
  document.querySelector(".bubble-container").style.transform = `translateY(${scroll*0.12}px)`;
  document.querySelector(".temple-container").style.transform = `translateY(${scroll*0.05}px)`;
  
  document.querySelectorAll(".feed-container > *").forEach((card,i)=>{
    card.style.transform = `translateY(${scroll*0.04 + i*2}px)`;
  });

  const tunnel = document.querySelector(".tunnel-effect");
  if(tunnel) tunnel.style.transform = `translateX(-50%) rotate(${scroll*0.6}deg)`;
});

// ===== FEED CARDS DYNAMIC AURA =====
const feedContainer = document.querySelector(".feed-container");
for(let i=0;i<12;i++){
  const card = document.createElement("div");
  card.className = "feed-card";
  card.style.background = `linear-gradient(135deg, hsl(${i*30},90%,70%), hsl(${i*30+60},80%,60%))`;
  card.style.padding = "20px";
  card.style.borderRadius = "15px";
  card.style.color = "#111";
  card.style.fontWeight = "bold";
  card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease";
  card.innerText = `Post #${i+1} – Welcome to IDN Universe!`;
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.08)";
    card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
    card.style.filter = "brightness(1.2)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "none";
    card.style.filter = "brightness(1)";
  });
  feedContainer.appendChild(card);
}

// ===== PORTAL LOGIN TUNNEL NEON =====
const portalBtn = document.getElementById("portal-btn");
portalBtn.addEventListener("mouseenter", () => {
  portalBtn.style.boxShadow = "0 0 80px rgba(0,255,255,0.8)";
  portalBtn.style.transform = "scale(1.2)";
});
portalBtn.addEventListener("mouseleave", () => {
  portalBtn.style.boxShadow = "0 10px 30px rgba(0,255,255,0.5)";
  portalBtn.style.transform = "scale(1)";
});

// ===== OPTIONAL: RANDOM FLOATING PARTICLES GLOW =====
function floatingGlow(){
  const glowCount = 50;
  for(let i=0;i<glowCount;i++){
    const p = document.createElement("div");
    p.style.position = "absolute";
    p.style.width = `${1+Math.random()*3}px`;
    p.style.height = p.style.width;
    p.style.background = `hsl(${Math.random()*360},100%,70%)`;
    p.style.borderRadius = "50%";
    p.style.top = `${Math.random()*100}%`;
    p.style.left = `${Math.random()*100}%`;
    p.style.opacity = Math.random()*0.6+0.2;
    p.style.pointerEvents = "none";
    p.style.animation = `glowMove ${5+Math.random()*5}s infinite alternate`;
    document.body.appendChild(p);
  }
}
floatingGlow();

// CSS Keyframes for floatingGlow dynamically
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes glowMove {
  0% { transform: translate(0,0); }
  50% { transform: translate(20px,-20px); }
  100% { transform: translate(-20px,20px); }
}
`;
document.head.appendChild(styleSheet);
