let count = setInterval(() => {
    let countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();
    let datenow = new Date().getTime();
    let diffDate = countdownDate - datenow;

    let days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((diffDate % (1000 * 60)) / 1000);

    // console.log(days);

    document.querySelector(".day").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hour").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".min").innerHTML = mins < 10 ? `0${mins}` : mins;
    document.querySelector(".sec").innerHTML = secs < 10 ? `0${secs}` : secs;

    if (diffDate < 0){
        clearInterval(count);
    }
})
