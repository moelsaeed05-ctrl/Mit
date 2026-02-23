<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MIT</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    overflow:hidden;
    background:black;
    color:white;
}

/* اللوجو */
.logo{
    position:absolute;
    top:25px;
    left:50%;
    transform:translateX(-50%);
    font-size:60px;
    letter-spacing:20px;
    font-weight:bold;
    z-index:10;
}

.section-title{
    position:absolute;
    top:40px;
    left:40px;
    font-size:22px;
    letter-spacing:3px;
    color:#ccc;
    display:none;
    z-index:10;
}

.yellow{
    color:#ffd700;
    text-shadow:0 0 5px #ffd700,0 0 20px #ffae00,0 0 40px #ffae00;
}

.red{
    color:#ff1a1a;
    text-shadow:0 0 5px #ff1a1a,0 0 20px #ff0000,0 0 40px #ff0000;
}

/* القائمة */
.menu{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    display:flex;
    flex-direction:column;
    gap:50px;
    align-items:center;
    z-index:10;
}

.item{
    cursor:pointer;
    font-size:22px;
    letter-spacing:3px;
    padding:10px 25px;
    border-radius:15px;
    transition:0.3s;
}

.item:hover{
    transform:scale(1.2);
    text-shadow:0 0 10px #aaa,0 0 30px #777;
}

/* المنتجات */
.products{
    position:absolute;
    top:120px;
    left:50%;
    transform:translateX(-50%);
    width:80%;
    display:none;
    flex-wrap:wrap;
    justify-content:center;
    gap:40px;
    z-index:10;
}

.card{
    width:230px;
    height:280px;
    border-radius:20px;
    background:rgba(255,255,255,0.05);
    backdrop-filter:blur(5px);
    display:flex;
    align-items:center;
    justify-content:center;
    transition:0.4s;
    cursor:pointer;
    overflow:hidden;
    opacity:0;
    transform:translateY(40px);
}

.card.show{
    opacity:1;
    transform:translateY(0);
}

.card:hover{
    box-shadow:0 0 20px #aaa,0 0 40px #666;
    transform:translateY(-10px);
}

.product-img{
    width:100%;
    height:100%;
    object-fit:contain;
    mix-blend-mode:lighten;
    filter: drop-shadow(0 0 10px #aaa)
            drop-shadow(0 0 25px #888)
            drop-shadow(0 0 50px #666);
}

/* fullscreen */
.viewer{
    position:fixed;
    inset:0;
    background:rgba(0,0,0,0.9);
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:100;
    opacity:0;
    pointer-events:none;
    transition:0.4s;
}

.viewer.active{
    opacity:1;
    pointer-events:auto;
}

.viewer img{
    width:450px;
    animation:pop 0.5s ease;
    filter: drop-shadow(0 0 20px #bbb)
            drop-shadow(0 0 60px #888)
            drop-shadow(0 0 100px #666);
}

@keyframes pop{
    from{transform:scale(0.6);}
    to{transform:scale(1);}
}

.back{
    position:absolute;
    top:40px;
    right:40px;
    cursor:pointer;
    display:none;
    z-index:10;
}

canvas{
    position:fixed;
    top:0;
    left:0;
}
</style>
</head>

<body>

<canvas id="space"></canvas>

<div class="logo">
    <span class="yellow">𝔐</span>
    <span class="red">𝔦</span>
    <span class="yellow">𝔗</span>
</div>

<div class="section-title" id="sectionTitle"></div>
<div class="back" id="backBtn">BACK</div>

<div class="menu" id="menu">
    <div class="item" onclick="openSection('HOODIES')">HOODIES</div>
    <div class="item" onclick="openSection('PANTS')">PANTS</div>
    <div class="item" onclick="openSection('ACCESSORIES')">ACCESSORIES</div>
</div>

<div class="products" id="products"></div>

<div class="viewer" id="viewer" onclick="closeViewer()">
    <img id="viewerImg">
</div>

<script>
const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let mode = "stars";

/* ----------- النجوم ----------- */
let stars = [];
for (let i = 0; i < 250; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5,
        speed: Math.random() * 0.4 + 0.1
    });
}

function drawStars() {
    stars.forEach(s => {
        s.x -= s.speed;
        if (s.x < 0) s.x = canvas.width;
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
    });
}

/* ----------- دخان رمادي كثيف ----------- */
let smokeParticles = [];

function createSmoke() {
    smokeParticles = [];
    for (let i = 0; i < 140; i++) {
        smokeParticles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 350 + 250,
            alpha: Math.random() * 0.25 + 0.2,
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5
        });
    }
}

createSmoke();

function drawSmoke() {
    smokeParticles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < -500) p.x = canvas.width + 500;
        if (p.x > canvas.width + 500) p.x = -500;
        if (p.y < -500) p.y = canvas.height + 500;
        if (p.y > canvas.height + 500) p.y = -500;

        let gradient = ctx.createRadialGradient(
            p.x, p.y, 0,
            p.x, p.y, p.radius
        );

        gradient.addColorStop(0, `rgba(200,200,200,${p.alpha})`);
        gradient.addColorStop(0.5, `rgba(150,150,150,${p.alpha * 0.8})`);
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

/* ----------- أنيميشن ----------- */
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(mode==="stars"){ drawStars(); }
    else{ drawSmoke(); }
    requestAnimationFrame(animate);
}
animate();

/* ----------- الأقسام ----------- */
function openSection(name){
    menu.style.display="none";
    products.style.display="flex";
    sectionTitle.style.display="block";
    backBtn.style.display="block";
    sectionTitle.innerText=name;
    products.innerHTML="";
    mode="smoke"; // تحويل للدخان
}

function closeViewer(){
    viewer.classList.remove("active");
}

backBtn.onclick=function(){
    menu.style.display="flex";
    products.style.display="none";
    sectionTitle.style.display="none";
    backBtn.style.display="none";
    mode="stars"; // رجوع النجوم
}
</script>

</body>
</html>
