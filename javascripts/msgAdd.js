

// main variables
const windows = document.querySelector( '.windows' );
const windowsAdd = document.querySelector( '#windowsAdd' );
const formCont2 = document.querySelector( '.formCont2' );


// addEvents
windows.addEventListener( 'click', () =>{
    formCont2.style.top = '-50%';
    windows.style.top = '-100%';
});
windowsAdd.addEventListener( 'click', () => {
    windows.style.top = '0%';
    formCont2.style.top = '50%';
});