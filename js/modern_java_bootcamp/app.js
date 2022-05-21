// const arr1 = ['viktor', 'misha'];
// const arr2 = ['lena', 'tanya'];
const arr3 = ['arina', 'igor', 'denis'];

// console.log(arr1.reverse());;
// console.log(Object.keys(arr1));

const game = {
   'Dota2': 8,
   'LoL': 9,
   'WOT': 8,
   'WOW': 10,
}

let someShit = 'ohhhh Shit here we go again'
function some1() {
   function some2() {
      function some3() {
         console.log('hello from some', someShit.toUpperCase());
      }
      some3();
   }
   some2();
}
function callThreeTimes(f) {
   f();
   f();
   f();
}

function sayHello() {
   console.log(`Hello my lord Viktor! Its nice to see you!`);
}

function isValidStr(str) {
   return function (length) {
      return str.length <= length;
   }
}

const str1 = isValidStr('Chi Da Chi Sho');
// console.log(str1(12));
// console.log(str1(4));
// console.log(str1(14));
const price = [100, 123.52, 5400, 243.21, 23, 9000, 99.99, 22.12, 2999];

// sort мутирует изначальный массив.
// console.log('sort', price.sort((a, b) => b - a));

const votes = ['y', 'y', 'n', 'n','y','n','n','y','y','n','n','y','y']

const votesObj = votes.reduce((tally, curValue) => {
   tally[curValue] = (tally[curValue] || 0) + 1;
   return tally;
}, {});

console.log('votesObj', votesObj);

const math = {
   sum(...nums) { return nums.reduce((acc, cur) => acc + cur) },
   mult(...nums) { return nums.reduce((acc, cur) => acc * cur) }
};

// console.log({
//    name: 'rofl',
//    [math.sum(23,5212,321,442,123,1122,198)]: 'some',
//    [math.mult(23,5212,321)]: 'some mult',
// });

// Создай объект с 2 методами, в одном будет интервал, в другой будет выключение интервала. Проробатать ключевое слово this и стрелочные функции.  

const funcObj = {
   random: ['hello', 'fuck off', 'hi', 'goodbye', 'bye', 'greeting', 'asshole'],
   getRandom() {
      const randomPhrase = Math.floor(Math.random() * this.random.length);
      return this.random[randomPhrase];
   },
   randomInterval() {
      this.intervarId = setInterval(() => console.log(this.getRandom()), 3 * 1000);
   },
   cleareRandomInterval() {
     clearInterval(this.intervarId); 
   }
}

funcObj.randomInterval()

setTimeout(() => {
   console.log('STOP RANDOM SHIT!!!!');
   funcObj.cleareRandomInterval()
}, 12 * 1000)