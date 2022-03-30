
'use strict'

// main variables
let teclaPantalla = document.querySelector( '#tecla' );
let estatus = document.querySelector( '#estatus' );
let danger = document.querySelector( '#danger' );
let err = document.querySelector( '#err' );
const hidden = document.querySelector( '.hidden' );


// init
const teclas = [ 'A', 'B', '1', 'C', 'D', '2', 'E', 'F', '3', 'G', 'H', '4', 'I', 'J', '5', 'K', 'L', '6', 'M', 'N', '7', 'O', 'P', '8', 'Q', 'R','9', 'S', 'T', '0', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
estatus.innerHTML = 'Estado: Nulo'
danger.innerHTML = 'Aqui se mostrarán los errores que cometas, por ahora no has cometido ninguno'
err.innerHTML = 'Errores: 0'
let errFrontend = 0;
let successFrontend = 0;
let totalKeys = 0;


// windows
const windows = document.querySelector( '.windows' );
const windowsExit = document.querySelector( '.windowsExit' )
const formCont1 = document.querySelector( '.formCont1' );
const formCont2 = document.querySelector( '.formCont2' );

windows.addEventListener( 'click', () => {
    if ( formCont1.style.top != '50%' ) {
        windows.style.top = '-100%';
        formCont2.style.top = '-50%';
    };
});
windowsExit.addEventListener( 'click', () => {
    windows.style.top = '0%';
    formCont2.style.top = '50%';
});


// generarTecla
const generarTecla = () => {
    const aleatory = parseInt( Math.random() * ( 35 - 0 ) );
    const teclaActual = teclas[ aleatory ];
    teclaPantalla.innerHTML = teclaActual;
    return teclaActual
};
let teclaActual = generarTecla();


// keyPress
window.addEventListener( 'keypress', ( e ) => {
    if ( totalKeys == 30 ) return;
    let keyPress = e.key.toUpperCase();
    if ( keyPress == teclaActual ) {
        totalKeys += 1;
        teclaActual = generarTecla();
        successFrontend += 1;
        estatus.innerHTML = 'Estado: Correcto'
        danger.innerHTML = `Muy bien, has presionado correctamente la tecla en pantalla`
    } else {
        errFrontend += 1;
        err.innerHTML = `Errores: ${ errFrontend }`;
        estatus.innerHTML = 'Estado: Incorrecto'
        danger.innerHTML = `OOPS !! debías presionar la tecla <span class="danger">${ teclaActual }</span> tu presionaste la tecla <span class="danger">${ keyPress }</span>`
    };
    if ( totalKeys == 30 ) {
        hidden.value = errFrontend;
        windows.style.top = '0%';
        formCont1.style.top = '50%';
        localStorage.setItem( 'success', successFrontend );
        localStorage.setItem( 'errors', errFrontend );
        return
    };
});