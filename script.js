let timer;
let seconds = 0, minutes = 0, hours = 0;
let isRunning = false;

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTime, 1000);
    }
}

function stopStopwatch() {
    isRunning = false;
    clearInterval(timer);
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerText = "00:00:00";
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    let displayTime = 
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;

    document.getElementById("display").innerText = displayTime;
}


