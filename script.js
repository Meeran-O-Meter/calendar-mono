const monthDisplay = document.getElementById("month-display");
const timeDisplay = document.getElementById("time-display");

let currentDate = new Date();
let currentMonth = currentDate.toLocaleDateString('default', {month: 'long'});
monthDisplay.innerHTML = currentMonth;


function clock () {
    const hour = currentDate.getHours()
    const hours = hour < 10 ? "0" + hour : hours;
    const minute = currentDate.getMinutes()
    const minutes = minute < 10 ? "0" + minute : minute;
    timeDisplay.innerHTML = hours + ":" + minutes
    setTimeout(clock, 1000)
}



clock()