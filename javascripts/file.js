
'use strict'

// mainVariables
const file = document.querySelector( '#file' );
const fileLabel = document.querySelector( '#fileLabel' );


// addFile
file.addEventListener( 'change', () => {
    const nameFile = file.files[0].name;
    fileLabel.innerHTML = nameFile;
});