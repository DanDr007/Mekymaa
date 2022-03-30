
'use strict'

// players
const players = document.querySelectorAll( '.player' );


// colors
if ( color1 == null ) color1 = '#7380ec';
if ( color2 == null ) color2 = '#ff7782';
if ( color3 == null ) color3 = '#41f1b6';
const colors = [ color1, color2, color3, color1 ];


// aleatoryColor
players.forEach(player => {
    const number = parseInt( Math.random() * ( 3 - 0 ) );
    player.style.color = colors[ number ];
});
