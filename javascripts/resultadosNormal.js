
'use strict'

// main variables
const results = document.querySelector( '#results' );
let logoPreload = document.querySelector( '#logoPreload' );
const preload = document.querySelector( '.preload' );
const here = document.querySelector( '#here' );


// erroresTecleo
results.innerHTML = `Tiempo: ${ localStorage.getItem( 'tiempo' ) } s<br>ppm: ${ localStorage.getItem( 'ppm' ) }`;


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
