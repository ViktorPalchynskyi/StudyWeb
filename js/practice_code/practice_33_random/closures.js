function foo() {
   let a = 22;

   function baz() {
      console.log('a', a);
   }

   bar(baz);
}

function bar(fn) {
   fn();
}

// foo();

for (var i = 1; i <= 5; i++) {
   (function(j) {
      setTimeout(function timer() {
         console.log('i', j);
      }, j * 1000);
   })(i);
}

// var j = 1;

// {  
//    j++;
//    setTimeout(function timer() {
//             console.log('i', j);
//          }, j * 1000);
// }

// {  
//    j++;
//    setTimeout(function timer() {
//             console.log('i', j);
//          }, j * 1000);
// }

// {  
//    j++;
//    setTimeout(function timer() {
//             console.log('i', j);
//          }, j * 1000);
// }