
'use strict'

// main variables
const errTecleo = document.querySelector( '#errTecleo' );
let logoPreload = document.querySelector( '#logoPreload' );
const preload = document.querySelector( '.preload' );
const here = document.querySelector( '#here' );


// erroresTecleo
errTecleo.innerHTML = `Errores de tecleo: ${ localStorage.getItem( 'errors' ) }`;


// preloadAnimation
const preloadAnimation = () => {
    TweenMax.to( preload, 1, {
        delay: 1,
        top: "-100%",
        ease: Expo.easeInOut
    });
};
preloadAnimation();


if ( tema != 'dark' ) logoPreload.src = '../images/logoTop.png';
