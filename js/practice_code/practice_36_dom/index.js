// import { admin } from './src/test/test.js';
// import * as say from './src/test/say.js';
// import { sayHi, sayBuy } from './src/test/say.js';
import Vitya from './src/test/user.js';

const div = document.createElement('div');
const div2 = document.querySelector('.buya');
const body = document.body;
const input1 = document.getElementById('input1');
const img = document.getElementById('img');

console.log('wtf?');

// console.log('admin', admin.name);
console.log(import.meta.url);

// say.sayHi();
// say.sayBuy();

const vityan = new Vitya('Viktor', 25);
vityan.sayMyName();

if (vityan.age > 20) {
   import('./src/test/say.js')
      .then((res) =>
         res.sayHi()
      );
} else {
   import('./src/test/say.js')
      .then((res) =>
         res.sayBuy()
      );
}