var timer = 60;
var score = 0;
var hit;

function makebubble() {
    var bub = "";
    for (var i = 0; i < 168; i++) {
        var ran = Math.floor(Math.random() * 10);
        bub += `<div class="bubble">${ran}</div>`;
    }
    var a = document.querySelector(".bottom")
    a.innerHTML = bub;
}

function runtimer() {
    var time = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            document.querySelector(".bottom").innerHTML = `<h1> GAME OVER </br> SCORE - ${score} </h1>`;
            clearInterval(time);
            document.querySelector("#hitval").textContent = "-";
        }
    }, 1000);
}

function makehit() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hit;
}

function increasescore(){
    score += 10;
    document.querySelector("#sc").textContent=score;
}

var h=document.querySelector(".bottom")
h.addEventListener("click" , function(val){
    var clickednum=Number(val.target.textContent)
    if(clickednum === hit){
        increasescore();
        makebubble();
        makehit();
    }
})


makehit();
makebubble();
runtimer();