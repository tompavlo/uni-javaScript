function first(text) {
   if ( text.style.background === 'blue'){
       text.style.background = 'yellow';
       text.style.color = 'black';
   }
   else {
       text.style.background = 'blue';
       text.style.color = 'white';
   }
}

function second(text) {
    if ( text.style.background === 'green'){
        text.style.background = 'white';
        text.style.color = 'red';
    }
    else {
        text.style.background = 'green';
        text.style.color = 'white';
    }
}