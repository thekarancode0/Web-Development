const hour = document.querySelector('.hours');
const minute= document.querySelector('.minutes');
const second = document.querySelector('.seconds');


function getCurrentTime(){
    let date = new Date();

    let sec = date.getSeconds();
    let min = date.getMinutes();
    let hr = date.getHours();

hour.innerHTML = hr < 10 ? '0' + hr : hr;
minute.innerHTML = min < 10 ? '0' + min : min;
second.innerHTML = sec < 10 ? '0' + sec : sec;

}
setInterval(getCurrentTime,1000);