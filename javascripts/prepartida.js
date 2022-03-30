
'use strict'


const logoPreload = document.querySelector( '#logoPreload' );
( tema != 'dark' )
    ? logoPreload.src = '../images/logoTop.png'
    : logoPreload.src = '../images/logo.PNG';

themeToggler.addEventListener( 'click', () => {
    ( tema != 'dark' )
        ? logoPreload.src = '../images/logoTop.png'
        : logoPreload.src = '../images/logo.PNG';
});