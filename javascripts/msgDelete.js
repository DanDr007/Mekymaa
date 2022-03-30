

// main variables
const windowsDelete = document.querySelector( '#windowsDelete' );
const formCont3 = document.querySelector( '.formCont3' );


// addEvents
windows.addEventListener( 'click', () =>{
    formCont3.style.top = '-50%';
    windows.style.top = '-100%';
});
windowsDelete.addEventListener( 'click', () => {
    windows.style.top = '0%';
    formCont3.style.top = '50%';
});