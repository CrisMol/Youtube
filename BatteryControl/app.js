if(navigator){
    navigator.getBattery()
    .then(status=>{
        Charging(status.charging);
        BatteryLevel(status.level);

        status.onchargingchange = ()=> Charging(status.charging);
        status.onlevelchange = ()=> BatteryLevel(status.level);
    })
}else{
    alert('sorry your browser doesn\'t suppport the navigator object');
}

let level = document.querySelector('.level');
let text = document.querySelector('.text');
function Charging(status){
    status ? level.classList.add('charging') :
    level.classList.remove('charging');
}

function BatteryLevel(value) {
    text.innerHTML = `${value * 100}%`;
    level.style.width = `${value * 100}%`;
}