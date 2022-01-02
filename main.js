var text = document.querySelector("#text");
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function speechToText() {
    recognition.start();
    text.innerHTML = "Speaking...";
}
recognition.onresult = function (e) {
    console.log(e);
    var transcript = e.reuslt[0][0].transcript;
    text.innerHTML = transcript;
};
