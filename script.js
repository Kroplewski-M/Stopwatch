const timer = document.getElementById('stopwatch');

var min = 0;
var sec = 0;
var miliSec = 0;
var startClock = false;

function startTime(){
    startClock = true;
    timerCycle();
}

function stopTime(){
    if(startClock == true){
        startClock = false;
    }
}

function restartTime(){
    document.getElementById("stopwatch").innerHTML = "<h1>00:00:00</h1>";
    startClock = false;
    min = 0;
    sec = 0;
    miliSec = 0;
}


function timerCycle(){
    if(startClock == true){
       miliSec = parseInt(miliSec);
        sec = parseInt(sec);
        min = parseInt(min);


        var startTime = new Date();
        var updateMili;
        updateMili = setInterval(function(){
            var timeElapsed = Date.now() - startTime;
            //milisec doesnt work
            miliSec = timeElapsed;

        },100);
        if(miliSec >= 100){
            sec +=1;
            miliSec = 0;
        }
        if(sec == 60){
            min+=1;
            sec = 0;
            miliSec = 0;
        }
        if(miliSec < 10  || miliSec == 0){
            miliSec = '0' + miliSec;
        }
        if(sec < 10  || sec == 0){
            sec = '0' + sec;
        }
        if(min < 10  || min == 0){
            min = '0' + min;
        }
     
    }
    setTimeout("timerCycle()", 1000);
}