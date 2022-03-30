
'use strict'

// main variables
const sideMenu = document.querySelector( 'aside' );
const menuBtn = document.querySelector( '#menu-btn' );
const closeBtn = document.querySelector( '#close-btn' );
const themeToggler = document.querySelector( '.theme-toggler' );
let logo = document.querySelector( '#logo' );


// dark
let tema = localStorage.getItem( 'tema' );
if ( tema == 'dark' ) document.body.classList.toggle( 'dark-theme-variables' );
if ( tema != 'dark' ) {
    themeToggler.querySelector( 'span:nth-child(2)' ).classList.toggle( 'active' );
    themeToggler.querySelector( 'span:nth-child(1)' ).classList.toggle( 'active' );
    logo.src = '../images/logoTop.png';
};


// colors
let color1 = localStorage.getItem( 'color1' );
let color2 = localStorage.getItem( 'color2' );
let color3 = localStorage.getItem( 'color3' );


// setProperty
( color1 == null )
    ? document.documentElement.style.setProperty('--color1', '#7380ec')
    : document.documentElement.style.setProperty('--color1', color1 );
( color2 == null )
    ? document.documentElement.style.setProperty('--color2', '#ff7782')
    : document.documentElement.style.setProperty('--color2', color2 );
( color3 == null )
    ? document.documentElement.style.setProperty('--color3', '#41f1b6')
    : document.documentElement.style.setProperty('--color3', color3 );


// toggle menu
menuBtn.addEventListener( 'click', () => sideMenu.style.display = 'block' );
closeBtn.addEventListener( 'click', () => sideMenu.style.display = 'none' );


// toggle teme
themeToggler.addEventListener( 'click', () => {
    ( tema == 'light' || tema == null )
        ? tema = localStorage.setItem( 'tema', 'dark' )
        : tema = localStorage.setItem( 'tema', 'light' );
    document.body.classList.toggle( 'dark-theme-variables' );
    themeToggler.querySelector( 'span:nth-child(1)' ).classList.toggle( 'active' );
    themeToggler.querySelector( 'span:nth-child(2)' ).classList.toggle( 'active' );
    tema = localStorage.getItem( 'tema' );
    ( tema != 'dark' )
        ? logo.src = '../images/logoTop.png'
        : logo.src = '../images/logo.PNG';

});


