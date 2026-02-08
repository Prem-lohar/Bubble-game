var timer = 60;
var score = 0;
var hit;

function makebubble() {
    var bub = "";
    var container = document.querySelector(".bottom");
    container.innerHTML = ""; // Clear existing bubbles
    
    // Get container dimensions
    var width = container.offsetWidth;
    var height = container.offsetHeight;
    
    // Calculate bubble size including gap (approximate)
    var bubbleSize = window.innerWidth <= 768 ? 50 : 60; // 40/35px + gaps
    
    // Calculate how many bubbles can fit
    var columns = Math.floor(width / bubbleSize);
    var rows = Math.floor(height / bubbleSize);
    var totalBubbles = columns * rows;

    if (totalBubbles < 20) totalBubbles = 20; // Fallback for very small screens

    for (var i = 0; i < totalBubbles; i++) {
        var ran = Math.floor(Math.random() * 10);
        bub += `<div class="bubble">${ran}</div>`;
    }
    container.innerHTML = bub;
}

// Handle window resizing to keep the container full
window.addEventListener("resize", function() {
    makebubble();
});


function makehit() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hit;
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