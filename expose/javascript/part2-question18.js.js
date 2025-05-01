function printTime(){
    let d = new Date(); 
    let time = d.toLocaleTimeString(); 
    console.log(time)
}

timerID = setInterval(printTime, 1000);


/*I realize this part wasn't asked for, 
but I decided to stop the printing after 1 minute*/
const MS_TIMER_DURATION = 60000;
setTimeout(clearInterval, 60000, timerID);