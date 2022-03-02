const timerDisplay = document.getElementById('timerDisplay');

let seconds = 0;

let clockTimer = 0;
const audio = document.querySelector("#audio");

function startPomodoroStudy() {
    document.body.style.background = 'rgb(230, 176, 176)';
    document.getElementById("buttonStartStudy").className = 'btn btn-light disabled';
    document.getElementById("buttonStartRest").className = 'btn btn-light';
    seconds = 25 * 60;
    htmlTransformation();
    if (clockTimer == 0) {
        clockTimer = setInterval(pomodoroStart, 1000);
    }
}

function startPomodoroRest() {
    document.body.style.background = 'rgb(176, 230, 207)';
    document.getElementById("buttonStartRest").className = 'btn btn-light disabled';
    document.getElementById("buttonStartStudy").className = 'btn btn-light';
    seconds = 5 * 60;
    htmlTransformation();
    if (clockTimer == 0) {
        clockTimer = setInterval(pomodoroStart, 1000);
    }
}

function pomodoroStart() {
    seconds--;
    timerCont();
    htmlTransformation();
}

//Mostrar o resultado das variaveis no HTML
function htmlTransformation() {
    const min = Math.floor(seconds / 60).toString();
    const sec = (seconds % 60).toString();
    timerDisplay.innerHTML = min.padStart(2, "0") + ":" + sec.padStart(2, "0");
}

//Como funciona para contar o tempo.
function timerCont() {
    if (seconds < 0) {
        clearInterval(clockTimer);
        document.getElementById("buttonStartStudy").className = 'btn btn-light';
        document.getElementById("buttonStartRest").className = 'btn btn-light'
        resetAll();
        audio.play();
        setTimeout(resetAudio, 5000);
    }

}

function resetAudio() {
    audio.pause();
    audio.currentTime = 0;
}

function resetAll() {
    resetAudio();
    clockTimer = 0;
    seconds = 0;
}
