const current = "23 April 2023 7:00";

const dayEl = document.getElementById('daysl')
const hourEl = document.getElementById('hoursl')
const minEl = document.getElementById('minsl')
const secEl = document.getElementById('secsl')

function countdown(){
    const newYear =new Date (current);
    const recentDate = new Date();
    
    const secondsLeft = (newYear - recentDate) / 1000;

    const  daysLeft = Math.floor(secondsLeft / 3600 / 24);
    const hoursLeft = Math.floor(secondsLeft / 3600) % 24;
    const minsLeft = Math.floor(secondsLeft / 60) % 60;
    const secsLeft = Math.floor(secondsLeft) % 60;

    dayEl.innerHTML = daysLeft;
    hourEl.innerHTML = hoursLeft;
    minEl.innerHTML = minsLeft;
    secEl.innerHTML = resetTime(secsLeft);

    // console.log(daysLeft, hoursLeft, minsLeft, secsLeft)
};

function resetTime(time){
    return time < 10 ? `0${time}` : time
};

countdown();
setInterval(countdown, 1000);