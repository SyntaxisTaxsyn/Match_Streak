var tElapsed = 0;
var tDisplay = "0"


// calculates a percentage score based on the supplied criteria
// range - number - the highest number which is considered as the lowest score
// score - number - the value to score against
// scale - number - value from 0-100 which defines the percentage scale to weight the score against
// returns a number representing the score out of 100% (when scale = 100)
function calculatePcnt(range,score,scale){

    var scr = 0

    scr = (((range-score)/range)/100)*scale;
    return scr;
    
}

// calculates the score based on moves and time, which are each scored out of 100% based on maximum achievable values
// lower numbers result in higher scores
// moves - number - the number of moves played
// time - number - the number of seconds passed
function calculateScore(moves,time){

    var movepcnt = 0;
    var timepcnt = 0;
    var maxmvs = 500;
    var maxtime = 1000;

    movepcnt = calculatePcnt(maxmvs,moves,50)*1000;
    timepcnt = calculatePcnt(maxtime,time,50)*1000;
    return (movepcnt + timepcnt) * 10;

}

// adds 1 second to the local timer and updates the display clock
function tick(){

    var mins = 0;
    var secs = 0;
    var sMins = "";

    tElapsed += 1;
    mins = Math.trunc(tElapsed / 60);
    secs = tElapsed % 60;
    tDisplay = padtime(mins) + ":" + padtime(secs);

}

// adds a leading 0 to an number value if its less then ten
function padtime(tVal){

    if (tVal < 10){
        return "0" + tVal.toString();
    } else {
        return tVal.toString();
    }
    
}