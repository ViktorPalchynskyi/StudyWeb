const testInput = document.getElementById('keyPractive');
const testScroll = document.getElementById('scrolPractive');
let count = 0;

document.addEventListener('keydown', (event) => {
   testInput.value = event.code;
   
   if(event.code === 'ArrowUp' || event.code === 'ArrowDown') event.preventDefault();

   if(event.code === 'KeyQ' && event.ctrlKey && event.shiftKey) alert('hotkey');

});

document.addEventListener('keyup', (event) => {
   testInput.value = event.key;
});

window.addEventListener('scroll', (event) => {
   testInput.value = pageYOffset + 'px';
});