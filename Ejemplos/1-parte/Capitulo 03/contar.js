// contar.js por Diego Juliao 

function init() {
    var n = 0;
    e = document.getElementById("salida");
    setInterval(function() { e.innerHTML = ++n; }, 1000);
}

window.onload = init;

