
// main variables
const windowsNormal = document.querySelector( '#windowsNormal' );
const windowsAdd = document.querySelector( '#windowsAdd' );


// windows
const windows = document.querySelector( '.windows' );
const formCont1 = document.querySelector( '.formCont1' );
const formCont2 = document.querySelector( '.formCont2' );
const formCont3 = document.querySelector( '.formCont3' );
const aceptar = document.querySelector( '#aceptar' );
const notPass = document.querySelectorAll( '.notPass' );


// windowsClick
windows.addEventListener( 'click', () =>{
    if ( formCont3.style.top != '50%' ) {
        windows.style.top = '-100%';
        formCont1.style.top = '-50%';
        formCont2.style.top = '-50%';
    };
});


// windowsEvents
windowsNormal.addEventListener( 'click', () => {
    windows.style.top = '0%';
    ( window.innerWidth <= 768 )
        ? formCont3.style.top = '50%'
        : formCont1.style.top = '50%';
});
windowsAdd.addEventListener( 'click', () => {
    windows.style.top = '0%';
    formCont2.style.top = '50%';
});


if ( window.innerWidth <= 768 ) {

    const prevenir = ( e ) => {
        e.preventDefault();
        windows.style.top = '0%';
        formCont3.style.top = '50%';
    };

    const gameEntrenamiento = document.querySelector( '#gameEntrenamiento' );
    const gameNormal = document.querySelector( '#gameNormal' );
    const gameClasificatoria = document.querySelector( '#gameClasificatoria' );
    gameEntrenamiento.addEventListener( 'click', ( e ) => prevenir( e ));
    gameNormal.addEventListener( 'click', ( e ) => prevenir( e ));
    gameClasificatoria.addEventListener( 'click', ( e ) => prevenir( e ));
    notPass.forEach( a => {
        a.href = '#';
    });

};