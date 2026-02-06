function save(){localStorage.setItem("ent_trip",document.body.innerHTML);}
function initApp(){
let d=localStorage.getItem("ent_trip");
if(d)document.body.innerHTML=d;
if("serviceWorker" in navigator){navigator.serviceWorker.register("service-worker.js");}
}

function setRole(r){document.getElementById("role").innerText="Mode: "+r;save();}
function toggle(id){document.getElementById(id).classList.toggle("done");save();}

function assignRoom(){
let r=document.getElementById("roomName").value;
let m=document.getElementById("memberName").value;
let li=document.createElement("li");
li.textContent="Room "+r+" → "+m;
document.getElementById("rooms").appendChild(li);
save();
}

let total=0;
function addExpense(){
total+=Number(document.getElementById("expense").value);
document.getElementById("totalExpense").innerText="Total ₹"+total;
save();
}

function fuelCalc(){
let km=document.getElementById("km").value;
let mil=document.getElementById("mil").value;
let price=document.getElementById("price").value;
let fuel=km/mil;
let cost=fuel*price;
document.getElementById("fuel").innerText="Fuel "+fuel.toFixed(1)+"L | ₹"+cost.toFixed(0);
}

function addPhoto(){
let t=document.getElementById("photoText").value;
let li=document.createElement("li");
li.textContent=t;
document.getElementById("photos").appendChild(li);
save();
}

function startDrive(){
document.getElementById("driveStatus").innerText="Reminder every 2 hrs";
setInterval(()=>alert("Driver Rest Needed"),7200000);
}

function setAlarm(){
let t=document.getElementById("alarmTime").value;
document.getElementById("alarmStatus").innerText="Alarm set for "+t;
}
