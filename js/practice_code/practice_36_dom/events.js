const testInput = document.getElementById('keyPractive');
let count = 0;

document.addEventListener('keydown', (event) => {
   testInput.value = event.code;
   count++;
   console.log('count', count);
   
   if(event.code === 'KeyQ' && event.ctrlKey && event.shiftKey) alert('hotkey');

});

document.addEventListener('keyup', (event) => {
   testInput.value = event.key;
});