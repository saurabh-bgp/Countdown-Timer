const days = document.getElementById("days")
const hours = document.getElementById("hours")
const mins = document.getElementById("mins")
const secs = document.getElementById("secs")

const updateCountDown = (deadline) => {
    const currentTime = new Date();
    const timeDiff = deadline - currentTime;
    
    let calSec = Math.floor(timeDiff/1000) % 60;
    let calMin = Math.floor(timeDiff/1000/60) % 60;
    let calHour = Math.floor(timeDiff/1000/60/60) % 24;
    let calDays = Math.floor(timeDiff/1000/60/60/24);

    const zeroTime = (time) =>{
        return time < 10 ? `0${time}` : time;
    }
   
    days.innerHTML = zeroTime(calDays);
    hours.innerHTML = zeroTime(calHour);
    mins.innerHTML = zeroTime(calMin);
    secs.innerHTML = zeroTime(calSec);

   
    
}

const countDown = (targetDate) => {
    setInterval(() => {
        updateCountDown(targetDate)
    }, 1000);
}
const targetDate = new Date("may 11 2055 07:00");
countDown(targetDate)