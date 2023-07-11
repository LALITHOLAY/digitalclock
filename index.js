const hourele=document.getElementById("hour")
const minele=document.getElementById("minutes")
const secele=document.getElementById("seconds")
const amele=document.getElementById("ampm")
function updateClock(){
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let ampm= "AM"


    if(h>12){
        h=h-12
        ampm="PM"
    }
    hourele.innerText=h;
    minele.innerText=m;
    secele.innerText=s;
    amele.innerText=ampm;
    setTimeout(()=>{
    updateClock()
    },1000)
}
updateClock();