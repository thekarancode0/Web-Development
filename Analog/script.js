const hourNum = document.querySelector('.number-hours');
const numberElement = []

for(let i=1; i<=12; i++){
    numberElement.push(`
        <span style="--index:${i}"><p>${i}</p></span>`
    );
}
hourNum.insertAdjacentHTML("afterbegin",numberElement.join(""));

const bandsElement = []
const bands = document.querySelector('.bands');

for(let i=1; i<=60; i++){
    bandsElement.push(`
        <span style="--index:${i}"><p></p></span>`
    );
}
bands.insertAdjacentHTML("afterbegin",bandsElement.join(""));


const handHours = document.querySelector('.hand.hours');
const handMinutes = document.querySelector('.hand.minutes');
const handSeconds= document.querySelector('.hand.seconds');

function getCurrentTime(){
    let date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();
    handSeconds.style.transform =`rotate(${currentSeconds * 6}deg)`;
    handMinutes.style.transform =`rotate(${currentMinutes * 6}deg)`;
    handHours.style.transform =`rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
}
setInterval(getCurrentTime,1000);