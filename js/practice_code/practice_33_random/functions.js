function setTimer() {
   return setTimeout(() => console.log('arguments', arguments), 2 * 1000);
}

// setTimer('some', 'shit', 'to', 'test', 123);

function getSome(num, cd) {
   if(num > 10) return cd(null, { name: 'Misha', status: 'alive', isDawn: true });
   return cd(true, { name: 'Idi nayhooy' });
}

getSome(2, (err, data) => {
   if(err) return console.log(data.name);
   console.log('Is dawn?', data.isDawn);
   console.log('Other', data);
});

function counter() {
   let counter = 0;
   return function () { 
      return ++counter;
   };
}

const counter1 = counter();
const counter2 = counter();

console.log('counter1', counter1());
console.log('counter2', counter2());
console.log('counter2', counter2());
console.log('counter1', counter1());
console.log('counter2', counter2());
console.log('counter1', counter1());
console.log('counter2', counter2());

sayHi.call({ name: 'Viktor' }, 'car');
function sayHi(price) {
   console.log(`Hello there ${this.name}! I hope you will get a ${price}!`);
};

var num;
console.log('num1' ,num);
num = 123;
console.log('num2' ,num);

function sayBye() {
   console.log('Buy');
   ++sayBye.count;
   console.log('sayBye count', sayBye.count);
}

sayBye.count = 0;
sayBye();
sayBye();
sayBye();