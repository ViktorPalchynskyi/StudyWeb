const div = document.createElement('div');
const div2 = document.querySelector('.buya');
const body = document.body;
const input1 = document.getElementById('input1');
const img = document.getElementById('img');

console.log(document.readyState);


document.addEventListener('DOMContentLoaded', () => {
   console.log('DOM is ready');
   console.log(`Размер изображения: ${img.offsetWidth}x${img.offsetHeight}`);
});

window.onload = () => {
   console.log(`Размер изображения: ${img.offsetWidth}x${img.offsetHeight}`);
};

window.addEventListener('unload', () => {
   navigator.sendBeacon('#', JSON.stringify({name: 'viktor'}));
});

// window.addEventListener('beforeunload', () => false);

// window.onbeforeunload = function() {
//    return false;
// };

document.addEventListener('readystatechange', () => console.log(document.readyState));