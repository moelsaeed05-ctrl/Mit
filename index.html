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

<script>
const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let mode = "stars";

/* =================== النجوم =================== */
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

/* =================== دخان واقعي =================== */
let smokes = [];

function createSmoke() {
    return {
        x: canvas.width/2 + (Math.random()*200 - 100),
        y: canvas.height + 50,
        radius: 20,
        alpha: 0.4,
        growth: Math.random()*0.6 + 0.4,
        speedY: Math.random()*1 + 0.5,
        drift: (Math.random()-0.5)*1
    };
}

function drawSmoke() {
    if (Math.random() < 0.08) { // كل شوية "نفخة"
        smokes.push(createSmoke());
    }

    smokes.forEach((s, index) => {
        s.y -= s.speedY;
        s.x += s.drift;
        s.radius += s.growth;
        s.alpha -= 0.003;

        let gradient = ctx.createRadialGradient(
            s.x, s.y, 0,
            s.x, s.y, s.radius
        );

        gradient.addColorStop(0, `rgba(180,180,180,${s.alpha})`);
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();

        if (s.alpha <= 0) {
            smokes.splice(index, 1);
        }
    });
}

/* =================== أنيميشن =================== */
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    if(mode==="stars"){
        drawStars();
    } else {
        drawSmoke();
    }

    requestAnimationFrame(animate);
}
animate();

/* =================== تحكم الأقسام =================== */
function openSection(name){
    menu.style.display="none";
    sectionTitle.style.display="block";
    backBtn.style.display="block";
    sectionTitle.innerText=name;
    mode="smoke";
}

backBtn.onclick=function(){
    menu.style.display="flex";
    sectionTitle.style.display="none";
    backBtn.style.display="none";
    mode="stars";
}
</script>

</body>
</html>
