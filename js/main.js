var texto=document.querySelector("textarea");
var boton = document.querySelector("#btnLeer").addEventListener('click', escuchar);
var btnCopiar = document.querySelector(".btnCopiar").addEventListener('click',copiar);
var btnPegar = document.querySelector(".btnPegar").addEventListener('click', pegar);
var btnBorrar = document.querySelector('[data-btn-borrar]').addEventListener('click', borrar);

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

function borrar(){
    texto.value="";
}
