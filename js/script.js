let section = document.querySelector("section"),
icons = document.querySelector(".icons");
let audio = new Audio('wav/cat purr 2.wav');

icons.onclick = ()=>{
  section.classList.toggle("dark");
  audio.load();
  audio.play();
}

function displayTime(){
    
    const dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    if(hrs < 10){
        hrs = "0" + hrs;
    }

    if(min < 10){
       min = "0" + min;
    }

    if(sec < 10){
        sec = "0" + sec;
    }


    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);