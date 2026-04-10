document.addEventListener('DOMContentLoaded', function () {
    let currentDate = new Date();
    let today = new Date();
    const monthDisplay = document.getElementById("month-display");
    const timeDisplay = document.getElementById("time-display");
    const calendarDates = document.getElementById("calendar-dates");
    let currentMonth = currentDate.toLocaleDateString('default', {month: 'long'});
    monthDisplay.innerHTML = currentMonth;

    function calendarRender(date) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay  = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();
        calendarDates.innerHTML = '';


        const previousMonthLastDay = new Date(year, month, 0).getDate()
        for (let i = firstDay; i > 0; i--){
            const dayDiv = document.createElement('div')
            dayDiv.textContent = previousMonthLastDay - i + 1;
            dayDiv.classList.add ('invisible')
            calendarDates.appendChild(dayDiv)

        }

        for (let i = 1; i <= lastDay; i++) {
            const dayDiv = document.createElement('div')
            dayDiv.textContent = i
            if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayDiv.classList.add('today')
            }
            calendarDates.appendChild(dayDiv);
        }

    }

    function clock () {
        const hour = currentDate.getHours()
        const hours = hour < 10 ? "0" + hour : hour;
        const minute = currentDate.getMinutes()
        const minutes = minute < 10 ? "0" + minute : minute;
        timeDisplay.innerHTML = hours + ":" + minutes
        setTimeout(clock, 1000)
    };

    //Clock Widget

    const hour = document.querySelector('.hour');
    const minute = document.querySelector('.minute');
    const second = document.querySelector('.second');

    const deg = 6;

    setInterval(() => {
        let day = new Date();
        let hours = day.getHours() * 30;
        let minutes = day.getMinutes() * deg;
        let seconds = day.getSeconds() * deg;

        hour.style.setProperty('--rotate', (hours) + (minutes/12) + "deg");
        minute.style.setProperty('--rotate', minutes + 'deg');
        second.style.setProperty('--rotate', seconds + 'deg');
    })

    clock()
    calendarRender(currentDate)
});

