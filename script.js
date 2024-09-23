function updateClock(){
    const clock = document.getElementById("clock");

    //get current time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let period = "AM";

    //convert to 12 hours format
    if(hours>12){
        period = "PM";
        hours = hours > 12 ? hours - 12 : hours;
    }
    
    // set hours to 12 for midnight and noon
    hours = hours === 0 ? 12 : hours;

    //format hours , minutes and seconds so that it always have two digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    //update the clock display
    clock.textContent = `${hours}:${minutes}:${seconds} ${period}`;
}

//clock the function once
updateClock();


//udpate the clock every second
setInterval(updateClock, 1000);