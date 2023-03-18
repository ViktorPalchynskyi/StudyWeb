// import { admin } from './src/test/test.js';
// import * as say from './src/test/say.js';
// import { sayHi, sayBuy } from './src/test/say.js';
import { Menu } from "./src/test/Menu.js";
const div2 = document.querySelector('.buya');

const button = document.createElement('button');
button.innerText = 'Click me';
button.style.backgroundColor = 'violet';
div2.before(button);
button.addEventListener('click', () => {
   location.href = 'https://github.com/ViktorPalchynskyi'
});
const div3 = document.createElement('div');
div3.innerHTML = `
   <p>Hello there</p>
   <button>Click me too</button>
`;
div2.insertAdjacentElement('afterbegin', div3);

const parentDiv = document.querySelector('.test');

parentDiv.addEventListener('mouseover', (event) => {
   const targetElem = event.target.closest('.testInside');
   
   if (!targetElem) return;
   
   targetElem.style.background = 'pink';
});

parentDiv.addEventListener('mouseout', (event) => {
   const targetElem = event.target.closest('.testInside');
   
   if (!targetElem) return;
   
   targetElem.style.background = '';
});

parentDiv.addEventListener('click', (event) => {
   const targetElem = event.target.closest('.testInside');
   
   if (!targetElem) return;

   console.log('targetElem', targetElem.dataset.menu);
   targetElem.style.display = 'none';
});

const menu = document.querySelector('.menu');

new Menu(menu);

document.addEventListener('click', (event) => {
   const target = event.target

   if (target.hasAttribute('data-counter')) target.value++;

   if (target.hasAttribute('data-togle-id')) {
      const id = target.dataset.togleId;
      const form = document.getElementById(id);
      form.hidden = !form.hidden;
   }
});

parentDiv.addEventListener('contextmenu', (event) => {
   event.preventDefault();
   alert('context on parentDiv');
});

document.addEventListener('contextmenu', (event) => {
   if (event.defaultPrevented) return;
   event.preventDefault();
   alert('context on document');
});