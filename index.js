const clockContainer = document.querySelector(".js-clock"),
    clockTitle = document.querySelector("h1");

function getTime() {
    const timer = new Date();
    const hours= timer.getHours();
    const mins= timer.getMinutes();
    const secs= timer.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${mins < 10 ? `0${mins}` : mins}:${secs < 10 ? `0${secs}` : secs}`;
}


function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();
