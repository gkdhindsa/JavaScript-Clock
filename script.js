function setTime() {
    let date=new Date();
    console.log('updating time');
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let hdig=hours
    let mdig=minutes
    let sdig=seconds;

    if(hours<10){
        hdig="0"+hours.toString();
    }
    if(minutes<10){
        mdig="0"+minutes.toString();
    }
    if(seconds<10){
        sdig="0"+seconds.toString();
    }


    document.getElementById("hours").textContent=hdig+ " :";
    document.getElementById("minutes").textContent=mdig+ " :";
    document.getElementById("seconds").textContent=sdig;

     if (hours >= 12)
        hours -= 12;

    console.log(hours);
    console.log(minutes);
    console.log(seconds);
    let minutedegrees = (6 * minutes);
    let secondDegrees = (6 * seconds);
    let hourdegrees = ((hours*30)+(minutes/2));

    document.getElementById("hour-hand").style.transform = "rotate(" + hourdegrees.toString() + "deg)";
    document.getElementById("second-hand").style.transform = "rotate(" + secondDegrees.toString() + "deg)";
    document.getElementById("minute-hand").style.transform = "rotate(" + minutedegrees.toString() + "deg)";
}
setInterval(setTime, 1000);