const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const shavuot2022 = "4 June 2022"


function countdown() {
    const shavuot2022Date = new Date(shavuot2022)
    const currentDate = new Date()

    const totalSeconds = (shavuot2022Date - currentDate)/1000

    const days = Math.floor(totalSeconds/3600/24)
    const hours = Math.floor(totalSeconds/3600) % 24
    const minutes = Math.floor(totalSeconds/60) % 60
    const seconds = Math.floor(totalSeconds) % 60
    console.log(hours)

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}
countdown()

setInterval(countdown, 1000)

