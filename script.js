let minuteRight = document.getElementById('numberMinuteRight');
let minuteLeft = document.getElementById('numberMinuteLeft');
let secondRight = document.getElementById('numberSecondRight');
let secondLeft = document.getElementById('numberSecondLeft');

let numberMinuteLeft = 0;
let numberMinuteRight = 0;
let numberSecondLeft = 0;
let numberSecondRight = 0;

let clockTimer = 0;
const audio = document.querySelector("#audio");

function startPomodoroStudy(){
    document.body.style.background = 'rgb(230, 176, 176)';
    document.getElementById("buttonStartStudy").className = 'btn btn-light disabled';
    document.getElementById("buttonStartRest").className = 'btn btn-light';
    numberMinuteLeft = 2;
    numberMinuteRight = 5;
    numberSecondLeft = 0;
    numberSecondRight = 0;
    htmlTransformation();
    if (clockTimer == 0){
        clockTimer = setInterval(pomodoroStart, 1000);
    }
}

function startPomodoroRest(){
    document.body.style.background = 'rgb(176, 230, 207)';
    document.getElementById("buttonStartRest").className = 'btn btn-light disabled';
    document.getElementById("buttonStartStudy").className = 'btn btn-light';
    numberMinuteLeft = 0;
    numberMinuteRight = 5;
    numberSecondLeft = 0;
    numberSecondRight = 0;
    htmlTransformation();
    if (clockTimer == 0){
        clockTimer = setInterval(pomodoroStart, 1000);
    }
}

function pomodoroStart(){
    numberSecondRight--;
    timerCont();
    htmlTransformation();
}

//Mostrar o resultado das variaveis no HTML
function htmlTransformation(){
    minuteRight.innerHTML = numberMinuteRight;
    minuteLeft.innerHTML = numberMinuteLeft;
    secondRight.innerHTML = numberSecondRight;
    secondLeft.innerHTML = numberSecondLeft;
}

//Como funciona para contar o tempo.
function timerCont(){
    if (numberSecondRight < 0){
        numberSecondRight = 9;
        numberSecondLeft--
    }

    if (numberSecondLeft < 0){
        numberSecondLeft = 5;
        numberMinuteRight--;
    }

    if (numberMinuteRight < 0){
        numberMinuteRight = 9;
        numberMinuteLeft--;
    }

    if (numberMinuteLeft < 0){
        clearInterval(clockTimer);
        document.getElementById("buttonStartStudy").className = 'btn btn-light';
        document.getElementById("buttonStartRest").className = 'btn btn-light'
        resetAll();
        audio.play();
        setTimeout(resetAudio, 5000);
    }

}

function resetAudio(){
    audio.pause();
    audio.currentTime = 0;
}

function resetAll(){
    resetAudio();
    clockTimer = 0;
    numberMinuteLeft = 0;
    numberMinuteRight = 0;
    numberSecondLeft = 0;
    numberSecondRight = 0;
}
