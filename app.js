var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#text-input");
var output=document.querySelector("#output");

function clickHandler(){
    console.log(txtInput.value)
    console.log("clicked");
} 

btnTranslate.addEventListener("click",clickHandler)