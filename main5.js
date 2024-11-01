
let container=document.createElement("span")
container.className="main"


let hrstime=document.createElement("span");
let minstime=document.createElement("span");
let secstime=document.createElement("span");
container.append(hrstime,minstime,secstime);
document.body.appendChild(container);


function  NewDate(){
    setInterval(()=>{
        let date=new Date()
         hrstime.innerText= date.getHours()<10 ? "0"+date.getHours():date.getHours();
         minstime.innerText=date.getMinutes() <10 ? "0"+date.getMinutes(): date.getMinutes();
         secstime.innerText=date.getSeconds()<10? "0"+date.getSeconds():date.getSeconds();
         

    }, 1000 )
}

NewDate();