// ich habe programmiererfahrung (nicht in js aber in python und java). wollte nur sagen damit sie nicht denken, dass mit ki gebaut habe.
// aber habe natrülich für syntax für js nachgeschaut.

const questions = ["1. Was ist der häufigste Grund, warum Menschen ihre Ziele nicht erreichen?",
    "2. Wie kann man Ablenkungen am effektivsten reduzieren?",
    "3. Was ist die beste Strategie, um eine neue Gewohnheit zu etablieren?",
    "4. Warum sind kleine, regelmäßige Verbesserungen oft effektiver als große Veränderungen?",
    "5. Wie kann man mit minimalem Aufwand die Produktivität steigern?"];

const options = [
    ["Zu wenig Motivation", "Keine klare Strategie und Systeme", "Fehlende Disziplin", "Zu wenig Talent"],
    ["Multitasking üben, um schneller zu arbeiten", "Sich zwingen, fokussiert zu bleiben", "Die Umgebung so gestalten, dass Ablenkungen minimiert werden", "Nur dann arbeiten, wenn man motiviert ist"],
    ["Sie mit einer bestehenden Routine verknüpfen", "Direkt große Veränderungen vornehmen", "Warten, bis man sich bereit fühlt", "Sich durch Willenskraft dazu zwingen"],
    ["Weil sie weniger Zeit kosten", "Weil sie sich langfristig aufbauen und nachhaltiger sind", "Weil sie einfacher sind, aber wenig Wirkung haben", "Weil große Veränderungen immer scheitern"],
    ["Den Tag mit der wichtigsten Aufgabe beginnen", "Mehrere Aufgaben gleichzeitig erledigen", "Den Arbeitstag spontan und flexibel gestalten", "Längere To-Do-Listen schreiben"]
];



const answers = [1, 2, 0, 1, 0];

let score = 0;
let q = 0;//nummer der frage
let name = '';
let user_answers = [];

function start() { // soll von dem user den namen bekommen und das für intro nutzen. es soll dann auch der weiter button zu sehen sein.
    name = prompt('Wie heißt du??');
    while (name == null || name == '') {
        name = prompt('Du musst deinen Namen eintragen!!! Wie heißt du?');
    }
    document.getElementById("start").style.display = "none";
    document.getElementById("intro").innerHTML = `Hallo ${name}! In diesem Quiz wirst du 5 Fragen zu Produktivität beantworten. Viel Erfolg!`;
    document.getElementById("weiter").innerHTML = "Weiter";
    document.getElementById("weiter").style.display = "flex";
}

function weiter() {//soll die nächste frage anzeigen und die antworten zurücksetzen und die antworten des users speichern
    if (q > 0) {
        let selectedOption = document.querySelector('input[name="answer"]:checked');
        if (selectedOption) {
            user_answers.push(parseInt(selectedOption.value));
            selectedOption.checked = false;
        } else {
            alert('Bitte wähle eine Option aus!');
            return;
        }
    }

    if (q == 5) {
        console.log(user_answers);
        document.getElementById("question-container").style.display = "none";
        document.getElementById("answer-buttons").style.display = "none";
        document.getElementById("weiter").style.display = "none";
        for(let i=0; i<5; i++) {
            if(user_answers[i] == answers[i]) {
                console.log("Correct");
                score = score + 1;
                console.log(score);
            }
            else{
                console.log("False");
            }
        }
        document.getElementById("intro").innerHTML = `Boah ${name}!!! Dein Ergebnis: ${score} von 5 Punkten`;
        document.getElementById("intro").style.display = "flex";
        return;
    }

    document.getElementById("intro").style.display = "none";
    document.getElementById("question").innerHTML = questions[q];
    for(let i=0; i<4; i++) {
        console.log(options[q][i]);
        document.getElementById(`option${i}`).nextSibling.textContent = options[q][i];
    }
    q = q + 1;
    document.getElementById("question-container").style.display = "flex";
    document.getElementById("answer-buttons").style.display = "flex";
}