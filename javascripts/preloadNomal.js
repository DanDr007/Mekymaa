
'use strict'


// main variables
let logoPreload = document.querySelector( '#logoPreload' );
const preload = document.querySelector( '.preload' );
const here = document.querySelector( '#here' );
const opps = document.querySelector( '#opps' );


const consejos = [
    'Puedes aprender técnicas mecanografias <br> en el modo de juego Entrenamiento',
    '¿Pierdes mucho? intenta aprendiendo <br> a mecanografiar en el modo entrenamiento',
    'Puedes personalizar la aplicacion <br> en el apartado de ajustes',
    'Establece tu foto de perfil en el <br> apartado de ajustes en modificar datos',
    'Agrega amigos por medio de su id <br> que se encuentra en la pestaña de ajustes',
    '¿Estas aburrido? prueba a jugar clasificatoria',
    '¿Quieres jugar con un grupo de amigos? <br> crea una sala privada'
];
const number = parseInt( Math.random() * ( consejos.length - 0 ) );
here.innerHTML = consejos[ number ];


// preloadAnimation
const preloadAnimation = () => {
    TweenMax.to( preload, 1, {
        delay: 2,
        top: "-100%",
        ease: Expo.easeInOut
    });
};
preloadAnimation();


if ( tema != 'dark' ) logoPreload.src = '../images/logoTop.png';