/*==============================
     setInterval() Exercise
==============================*/

function countDown(time) {
    if (time === 0) {console.log("Ring Ring Ring!!!");} 
    else            {console.log("Time: ", time);} 
}

let time = 5;

let timer = setInterval(function() {
    countDown(time);
    if (time === 0) {clearInterval(timer);}
    else            {time--;}
}, 1000);
