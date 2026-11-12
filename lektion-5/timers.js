let sekunder = 1;
let myTimer = null;

myTimer = setInterval(() => {
    //console.log(sekunder);
    document.getElementById('timer-output').textContent = sekunder;
    sekunder++;
}, 1000);

const stopButton = document.getElementById('timer-stop');
stopButton.addEventListener('click', () => clearInterval(myTimer));