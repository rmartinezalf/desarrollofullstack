// forms.js oja.la/

var resultadosExt;
var formExt;
var resultsContent = "";
var tieneValidacion = false;
var validOkay = true;

// mostrar una cadena en el div de salida
function salida( s ) {
    resultadosExt.innerHTML += '<p>' + s + '</p>';
}

// mostrará un mensaje de error en el div de salida
function errorDeSalida( s ) {
    resultadosExt.innerHTML += '<p class="error">' + s + '</p>';
}

// borrar el div de salida
function limpiarSalida() {
    resultadosExt.innerHTML = '';
}

// comprobar un elemento de formulario con la API de validez
function isValid( e ) {
    if(e.validity.valid === true) {
        return true;
    } else {
        m = e.validationMessage;
        errorDeSalida(e.name + ': ' + m);
        validOkay = false;
        return false;
    }
}

// devolver el valor de la pantalla de un elemento form
function dispValue( e ) {
    v = function(s) { return e.name + ': ' + s }

    if(e.type == "radio") {

        if(e.checked) return v(e.value);
        else return ""  ;
    }

    // para la selección múltiple mostrar una lista separada por comas
    if(e.type == "select-multiple") {
        a = [];
        for( var i = 0; i < e.length; ++i ) {
            if(e[i].selected) a.push(e[i].value);
        }
        return v(a.join(', '));
    }

    if(e.type == "checkbox") return v( e.checked ? "Encendido" : "Apagado" );

    else return v(e.value);

    
}

// mostrar todos los elementos de un form
function display() {
    limpiarSalida();
    if(!tieneValidacion) {
        errorDeSalida('Esta plataforma no admite la API de validación HTML5.');
    }
    validOkay = true;
    for( var i = 0; i < formExt.length; ++i ) {
        var e = formExt.elements[i];
        var name = e.name;
        if(!tieneValidacion) salida(dispValue(e));
        if(tieneValidacion && isValid(e)) {
            salida(dispValue(e));
        }
    }
    return false;
}

function submitDisplay() {
    display();
    return validOkay;
}

function init() {
    // inicializar los elementos
    resultadosExt = document.getElementById('results');
    formExt = document.getElementById('f1');

    // compruebe si se implementa la API de validación
    tieneValidacion = (typeof formExt.elements[0].validity === 'object');
}

window.onload = init;
