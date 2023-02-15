a = 20;
var a;
// console.log('a', a);

// console.log('b', b);

var b = 23;

sum(2, 4)

function sum(a, b) {
   // console.log('a+b', a+b);
}

decr(10, 5);

var decr;

function decr(a, b) {
   console.log('a-b', a-b);
}

console.log('decr', decr);


decr = function(a, b) {
   console.log('a/b', a/b);
};

decr(20, 10);


console.log('typeof', typeof foo);


// foo(); // "b"

// var a = true;
// if (a) {
//    function foo() { console.log( "a" ); }
// }
// else {
//    function foo() { console.log( "b" ); }
// }

// tmp();

// {
//    function tmp() {
//       console.log('i`m alive');
//    }
// }

function sayHi() {
   phrase = "Привет"; // (*)
 
   if (false) {
     var phrase;
   }
 
   console.log(phrase);
 }
 sayHi();