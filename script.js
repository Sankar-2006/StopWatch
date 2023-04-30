let timerDisplay = document.querySelector('.timerDisplay')
const start = document.querySelector('.startBtn');
const lap = document.querySelector('.lapBtn');
const pause = document.querySelector('.pauseBtn');
const reset = document.querySelector('.resetBtn');
let lapContainer = document.querySelector('.lapContainer')
let lapOlContainer = document.querySelector('.lapOrderList')
let ms = 0;
let sec = 0;
let min = 0;
let hour = 0;
let timer = null;
let isRunning = false;
let isPause = false;

start.onclick = () => {
	if (timer != null) {
		clearInterval(timer);
	}
	timer = setInterval(startTimer, 10);
	isRunning = true;
	timerDisplay.style.animation = "";
	isPause = false;
}

pause.onclick = () => {
	if (isRunning === true) {
		clearInterval(timer);
		timerDisplay.style.animation = "blink 1.5s .2s infinite"
	}
	isPause = true;
	isRunning = false;
}

function startTimer() {
	ms++
	if (ms == 100) {
		ms = 0;
		sec++;
		if (sec == 60) {
			sec = 0;
			min++;
			if (min == 60) {
				min = 0;
				hour++;
			}
		}
	}

	let hourDisp = hour < 10 ? `0${hour}` : hour;
	let minDis = min < 10 ? `0${min}` : min;
	let secDis = sec < 10 ? `0${sec}` : sec;
	let msDis = ms < 10 ? `0${ms}` : ms;

	timerDisplay.innerText = `${hourDisp} : ${minDis} : ${secDis} : ${msDis}`;
}

lap.onclick = () => {
	if(isPause == true){
		window.alert("Timer is Paused. Can't add Lap time");
	} else {
		lapContainer.style.visibility = "visible";
		lapOlContainer.innerHTML += `<li>${timerDisplay.innerText}</li>`
	}
}

reset.onclick = () => {
	if (isRunning == true) {
		window.alert("Timer is Running. Can't Reset timer");
	} else {
		clearInterval(timer);
		timerDisplay.innerText = "00 : 00 : 00 : 00";
		ms = 0;
		sec = 0;
		min = 0;
		hour = 0;
		lapOlContainer.innerHTML = "";
		lapContainer.style.visibility = "hidden";
		timerDisplay.style.animation = "";
	}
}
