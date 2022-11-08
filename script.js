const timeEl = document.getElementById("time");
const ampmEl = document.getElementById('am-pm');
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-items");
const timeZoneEl = document.getElementById("time-zone");
const countryEl = document.getElementById('country')
const crreuntTempEl = document.getElementById('crreunt-temp')
const weatherForecastEl = document.getElementById('weather-forecast')

// set local time

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


}

setInterval(() => {
    upDateClock()
}, 1000)
