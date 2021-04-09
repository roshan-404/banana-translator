console.log("Translated your thing.");
// var userName = prompt("Enter your name");

// alert("you are in right page "+userName);

var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
console.log(btnTranslate);

serverURL = "https://api.funtranslations.com/translate/minion.json";

function Link(text) {
    return serverURL + "?text=" + text;
}




function clickEvent() {
    // console.log("Clicked!");
    // console.log("value", textInput.value);
    // console.log("value",outputDiv.innerText);
    fetch(Link(textInput.value))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
    //outputDiv.innerText = "done with translation: "+textInput.value;
}



btnTranslate.addEventListener("click", clickEvent);