const clock = document.getElementById('clock');

const currentTime = () =>{
    let date = new Date().toLocaleTimeString();
    clock.innerText = date;
}
currentTime();
setInterval(() => {
    currentTime();
}, 1000);


