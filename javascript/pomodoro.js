// ich habe programmiererfahrung (nicht in js aber in python und java). wollte nur sagen damit sie nicht denken, dass mit ki gebaut habe.
// aber habe natrülich für syntax für js nachgeschaut.

let start_time = 25*60;
let minutes = 0;
let seconds = 0;
let timer;
const break_time = 5*60;
let status = "Work";
let pause = true;

document.getElementById("status").innerHTML = status;
document.getElementById("timer").innerHTML = formatTime(start_time);

function info() {//zeigt die informationen an
    alert("Pomodoro Timer\n\n" +
        "Dies ist ein Pomodoro Timer. Der Timer ist auf 25 Minuten eingestellt. Nach 25 Minuten wird eine 5-minütige Pause gestartet.\n" +
        "Während der Pause wird ein Video von einem Tier Ihrer Wahl angezeigt. Sie können die Zeit erhöhen oder verringern, indem Sie auf die Schaltflächen + und - klicken.\n" +
        "Sie können auch das Tier auswählen, das während der Pause angezeigt wird. Klicken Sie dazu auf das Dropdown-Menü und wählen Sie das gewünschte Tier aus.\n" +
        "Klicken Sie auf Start, um den Timer zu starten. Klicken Sie auf Pause, um den Timer zu pausieren. Klicken Sie auf Zurücksetzen, um den Timer zurückzusetzen.\n" +
        "Viel Spaß beim Arbeiten!");
        
}

function startTimer() {//startet den timer
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(startTimer, 1000);
    if (start_time < 0) {
        if(status === "Work") {// wenn die arbeit fertig ist, dann wird die pause gestartet
            status = "Break";
            start_time = break_time;
            document.getElementById("status").innerHTML = status;
            changeVideo();
        }
        else { // wenn die pause fertig ist, dann wird die arbeit gestartet
            status = "Work";
            start_time = 25*60;
            document.getElementById("status").innerHTML = status;
            changeVideo();
        }
    }

    document.getElementById("timer").innerHTML = formatTime(start_time);
    start_time = start_time - 1;
    pause = false;
}

function formatTime(time) {//formatiert die zeit
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}

function pauseTimer() {//pausiert den timer
    pause = true;
    clearTimeout(timer);
}

function resetTimer() {//setzt den timer zurück
    start_time = 25*60;
    document.getElementById("timer").innerHTML = formatTime(start_time);
    statusq = "Work";
    document.getElementById("status").innerHTML = status;
    if (!pause){
        pauseTimer();
    }
    changeVideo();
}

function plus() {//plus 1 minute
    if (start_time < 60*60 && pause) {
        start_time = start_time + 60;
        document.getElementById("timer").innerHTML = formatTime(start_time);
    }
    else if(pause){
        alert("Du kannst die Zeit nicht weiter erhöhen!");
    }
}
function minus() {//minus 1 minute
    if (start_time > 60 && pause) {
        start_time = start_time - 60;
        document.getElementById("timer").innerHTML = formatTime(start_time);
    }else if(pause){
        alert("Du kannst die Zeit nicht weiter verringern!");
    }
}

function changeVideo(){//ändert das video je nach dem welches tier ausgewählt wurde
    let animal = document.getElementById("animal-preference").value;
    if(status === "Break"){
        document.getElementById("notbreak").style.display = "none";
        document.getElementById("video").style.display = "flex";
        if(animal === "cat"){
            document.getElementById("video").src = "https://www.youtube.com/embed/BOK8T1HK4S8";
        }
        else if(animal === "capybara"){
            document.getElementById("video").src = "https://www.youtube.com/embed/1q70atgYIhY";
        }
        else if(animal === "beaver"){
            document.getElementById("video").src = "https://www.youtube.com/embed/E-MJaYSoaqM";
        }
        else if(animal === "dog"){
            document.getElementById("video").src = "https://www.youtube.com/embed/W2fTb7iA_Po";
        }
        else if(animal === "rabbit"){
            document.getElementById("video").src = "https://www.youtube.com/embed/yvsvkf-RXck";
        }
    }
    else{
        document.getElementById("video").src = "";
        document.getElementById("notbreak").style.display = "flex";
        document.getElementById("video").style.display = "none";
    }
}