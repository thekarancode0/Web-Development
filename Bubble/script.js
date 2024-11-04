var timer=30;
var score = 0;
var hitrn;
function makeBubble(){
    var clutter ="";

for(var i=1; i<=176; i++){
    var rn = Math.floor(Math.random()*10)
    clutter  += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML =clutter;
}

function runTimer(){
   var timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timeValue").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1 style="color:#fff";>Game Over!!</h1>`;
        }
    },1000);
}

function getNewHit(){
    hitrn = Math.floor(Math.random() *10);
    document.querySelector("#Hitvalue").textContent=hitrn;
}

function increaseScore(){
    score += 10;
    document.querySelector("#Scorevalue").textContent = score;
}

document.querySelector("#pbtm")
.addEventListener("click",function(details){
    var clickedNumber = Number(details.target.textContent);
    if(clickedNumber === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})


    runTimer();
    makeBubble();
    getNewHit();

