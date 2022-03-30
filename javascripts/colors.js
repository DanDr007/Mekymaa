
'use strict'

// colorsInputs
let color1Input = document.querySelector( '#color1' );
let color2Input = document.querySelector( '#color2' );
let color3Input = document.querySelector( '#color3' );


// addEventListener
color1Input.addEventListener( 'blur', () => localStorage.setItem( 'color1', color1Input.value ));
color2Input.addEventListener( 'blur', () => localStorage.setItem( 'color2', color2Input.value ));
color3Input.addEventListener( 'blur', () => localStorage.setItem( 'color3', color3Input.value ));


// colorValidation
( color1 == null )
    ? color1Input.value = '#7380ec'
    : color1Input.value = color1;
( color2 == null )
    ? color2Input.value = '#ff7782'
    : color2Input.value = color2;
( color3 == null )
    ? color3Input.value = '#41f1b6'
    : color3Input.value = color3;