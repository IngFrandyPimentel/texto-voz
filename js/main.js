var texto=document.querySelector("textarea");
var boton = document.querySelector("#btnLeer");
var btnCopiar = document.querySelector(".btnCopiar");
var btnPegar = document.querySelector(".btnPegar");

function escuchar(){
    var msg = texto.value;
    var utterance = new SpeechSynthesisUtterance(msg);
    
    speechSynthesis.speak(utterance);

}
function copiar(){
    texto.select();
    document.execCommand('copy');
}

async function  pegar  (){
     
    var textoPegar= await navigator.clipboard.readText();
    texto.value=textoPegar;
    
}
boton.onclick=escuchar;
btnCopiar.onclick=copiar;
btnPegar.onclick=pegar;

