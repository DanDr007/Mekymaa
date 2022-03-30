
'use strict'

// main variables
let logoPreload = document.querySelector( '#logoPreload' );
const preload = document.querySelector( '.preload' );
let tiempo = document.querySelector( '#tiempo' );
let ppm = document.querySelector( '#ppm' );
let result = document.querySelector( '#result' );


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


tiempo.innerHTML = `Tú has tardado: ${ localStorage.getItem( 'tiempo' ) }`;
ppm.innerHTML = `${ localStorage.getItem( 'ppm' ) }ppm`;
if ( ppm > 40 ) {
    result.innerHTML = 'Has ganado'
} else {
    result.innerHTML = 'Has perdido'
}