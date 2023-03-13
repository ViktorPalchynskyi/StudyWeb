// import { admin } from './src/test/test.js';
// import * as say from './src/test/say.js';
// import { sayHi, sayBuy } from './src/test/say.js';
import User from './src/test/user.js';

const div = document.createElement('div');
const div2 = document.querySelector('.buya');
const body = document.body;
const input1 = document.getElementById('input1');
const img = document.getElementById('img');

console.log('navigator', navigator.userAgent);

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

const clone = div3.cloneNode(true);

setTimeout(()=> div3.remove(), 2000);

body.append(clone);