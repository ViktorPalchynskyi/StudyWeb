import { admin } from './test.js';

function sayHi() {
   alert(`Hello, ${admin.name}`);
}

function sayBuy() {
   alert(`Buy buy, ${admin.name}`);
}

export {
   sayHi,
   sayBuy
};