const timeEl = document.getElementById("time");
const ampmEl = document.getElementById('am-pm');
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-items");
const timeZoneEl = document.getElementById("time-zone");
const countryEl = document.getElementById('country')
const crreuntTempEl = document.getElementById('crreunt-temp')
const weatherForecastEl = document.getElementById('weather-forecast')

// set local time
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ['Sunday', 'Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Satureday']
function upDateClock() {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const secound = new Date().getSeconds();
    let ampm = 'AM'



    let h = hour < 10 ? '0' + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = secound < 10 ? "0" + secound : secound;
    if (h > 12) {
        h = h - 12;
        ampm = "PM"
    };



    timeEl.innerHTML = h + ":" + m + ':' + s;
    ampmEl.innerHTML = ampm;
    let day = days[new Date().getDay()]
    let date = new Date().getDate()
    let month = months[new Date().getMonth()];
    dateEl.innerHTML = day + ", " + date + " " + month

}

setInterval(() => {
    upDateClock()
}, 1000)
