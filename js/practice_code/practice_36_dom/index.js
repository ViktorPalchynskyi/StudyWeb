const div = document.createElement('div');
const div2 = document.querySelector('.buya');
const body = document.body;
const input1 = document.getElementById('input1');

console.log(body.nodeName);
console.log(div.nodeName);
console.log(document.nodeName);

div2.innerHTML = `<p>lorem</p>`;

console.log(div2.outerHTML);

div2.outerHTML = `<p>New elem</p>`;
body.append(div2);
console.log(body.firstChild.data);

console.log(body.firstChild.textContent = '<p>misha</p>');

setTimeout(() => div2.hidden = true, 2000);