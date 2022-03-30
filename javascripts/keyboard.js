
// keyCode
const key = document.querySelectorAll( '.key' );


// keyPress
const teclaPresionada = ( e ) => {
    for (let i = 0; i < key.length; i++) {
        if ( e.keyCode == key[ i ].dataset.keyCode ) {
            key[ i ].style.background = color1 || '#7380ec';
            key[ i ].style.color = 'var(--color-background)';
            key[ i ].style.border = 'none';
        };
    };
};


// keyUp
const teclaAlzada = () => {
    for (let i = 0; i < key.length; i++) {
        key[ i ].style.background = 'transparent';
        key[ i ].style.color = 'var(--color-dark)';
        key[ i ].style.border = '1.5px solid var(--color-dark)';
    };
};


// añadir eventos
document.addEventListener( 'keydown', ( e ) => teclaPresionada( e ));
document.addEventListener( 'keyup', ( ) => teclaAlzada( ));
