const div = document.createElement('div');
const div2 = document.querySelector('.buya');
const body = document.body;
const input1 = document.getElementById('input1');

div.innerHTML = `<h1>Hello there</h1>`;

body.append(div);
body.sayMyName = function () {
   alert(this.tagName);
};

body.setAttribute('style', 'color: skyblue');

setTimeout(() => body.removeAttribute('style'), 2000);


input1.setAttribute('value', 'Natasha');;

setTimeout(() => {
   input1.value = 'larisa'
}, 1000);

const orders = document.querySelectorAll('.order');

orders.forEach((order) => {
   order.setAttribute('data-order-state', 'new');
   console.log(order.getAttribute('data-order-state'));
   
});

orders[0].dataset.orderState = 'pending';