const div = document.createElement('div');
const div2 = document.querySelector('.buya');
const body = document.body;
const input1 = document.getElementById('input1');

console.log(div2.className);

div2.classList.add('buyaya');

console.log(div2.className);

setTimeout(() => div2.classList.remove('buyaya'), 2000);

setInterval(() => div2.classList.toggle('buyaya'), 1000);

const bodyStyle =getComputedStyle(body);

console.log(bodyStyle.backgroundColor);
