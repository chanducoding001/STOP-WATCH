// brought required elements witheir ids to do functionalities.
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hours = 00;
let minutes = 00;
let seconds = 00;
// taken count as -1 initially as i am calling setInterval function every 10ms when count reaches to 100,
// container shakes with addition of extra letter in the millisec count display
let count = -1;
// timer variable is a game changer here with that presence you,
// cannot let start button do its action again when it is on. so that timer will not go crazy like increasing timer count
//speed everytime you click on start button.

let timer=false; let resetAccess=false;
// i am using setInterval inside start button only so for that i am taking interval null globally.
let interval=null;

// start button click event happening when that happening, start function address is referred
startBtn.addEventListener("click",()=>{
    // i am calling setInterval only when the timer is false i.e !timer to make start counter count only once when it is clicked
    // and no further action until start or stop is clicked
    if(!timer){
        interval=setInterval(start,10)
    }
    // making timer to true,you are disabling start counter until stop or reset is clicked
    timer=true;
  //  resetAccess=true;
})
function start(){
   // resetAccess=false;
    count++;
    // start counter put conditions with the time change to defferentiate with seconds,minutes,hours.

    if(count<10){
        document.getElementById("count").innerHTML="0"+count;
    }else{
        document.getElementById("count").innerHTML=count;
    }
    if(count==99){
        seconds++;
        count=-1;
    }
    if(seconds==11){
        minutes++;
        seconds=0;
    }
    if(minutes==2){
        hours++;
        minutes=0;
        seconds=0;
    }
    if(seconds<10){
        document.getElementById("sec").innerHTML="0"+seconds+":"
    }else{
        document.getElementById("sec").innerHTML=seconds+":";
    }
    if(minutes<10){
        document.getElementById("min").innerHTML="0"+minutes+":"
    }else{
        document.getElementById("min").innerHTML=minutes+":";
    }
    if(hours<10){
        document.getElementById("hr").innerHTML="0"+hours+":"
    }else{
        document.getElementById("hr").innerHTML=hours+":"
    }
    
}
stopBtn.addEventListener("click",()=>{
    // now making timer to false to enable start btn
    timer=false;
    resetAccess=true;
    // disabling the interval functionality
    clearInterval(interval)
});

resetBtn.addEventListener("click",()=>{
    // below comment if you set to true after start button is enabled, reset button also have access to stop timer 
    //but i am making the flow from start>>>>stop>>>>reset
    // i.e after clicking start if you click only stop then reset is enabled. if not with timer is true, 
    // reset also stops the start button functionality

 timer=false;
   if(resetAccess===true){
    clearInterval(interval);
   
//    making count seconds minutes hours to their default values.
    count=-1;
    seconds=0;
    minutes=0;
    hours=0;
   
    document.getElementById("sec").innerHTML="00:";
    document.getElementById("min").innerHTML="00:";
    document.getElementById("hr").innerHTML="00:";
    document.getElementById("count").innerHTML="00";
   }
})
