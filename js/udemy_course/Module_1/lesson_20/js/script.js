"use strict";

// To String

console.log(typeof (String(null)));
console.log(typeof (String(4)));

console.log(typeof (5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number

console.log(typeof (Number('4')));


console.log(typeof (+'4'));

console.log(typeof (parseInt("15px", 10)));

// let answ = +prompt("Hello", "");

// To boolean

// 0, '', null, undefined, NaN;

let switcher = null;

if (switcher) {
   console.log('Working...');
}

switcher = 1;

if (switcher) {
   console.log('Working...');
}

console.log(typeof (Boolean('3')));


console.log(typeof (!!('3')));