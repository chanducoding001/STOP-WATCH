let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hours = 00;
let minutes = 00;
let seconds = 00;
let count = -1;
let timer=false;
let interval=null;

startBtn.addEventListener("click",()=>{
    if(!timer){
        interval=setInterval(start,10)
    }
    timer=true;
})
function start(){
    count++;
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
    timer=false;
    clearInterval(interval)});
resetBtn.addEventListener("click",()=>{
   // timer=false;
   if(!timer){
    clearInterval(interval);
   }
    count=-1;
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById("sec").innerHTML="00:";
    document.getElementById("min").innerHTML="00:";
    document.getElementById("hr").innerHTML="00:";
    document.getElementById("count").innerHTML="00";
})