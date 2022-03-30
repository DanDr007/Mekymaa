
'use strict'


// main variables
let logoPreload = document.querySelector( '#logoPreload' );
const preload = document.querySelector( '.preload' );
const here = document.querySelector( '#here' );
const opps = document.querySelector( '#opps' );
let width = window.innerWidth;


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


if ( width <= 768 ) {
    preload.style.top = '-100%';
} else {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then( ( stream  ) => {
        let video = document.querySelector( '#camara' );
        video.srcObject = stream;
        if ( stream != null ) {
            const preloadAnimation = () => {
                TweenMax.to( preload, 1, {
                    delay: 3,
                    top: "-100%",
                    ease: Expo.easeInOut
                });
            };
            preloadAnimation();
        };
    }).catch( ( err ) => {
        here.innerHTML = 'Para jugar este modo es necesario <br> el acceso a tu cámara';
        here.classList = 'danger';
        oops.innerHTML = 'OOPS !!'
        console.log( err );
    });
};


if ( tema != 'dark' ) logoPreload.src = '../images/logoTop.png';