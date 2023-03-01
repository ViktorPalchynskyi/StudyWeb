const set = new Set();
set.add('123');
set.add('123');
set.add('1235');
set.add('1232');
set.add('1232');

console.log(set.has('123'));

set.forEach((value, value2, set) => {
   console.log(`${value} ${value2} ${set}`);
});

const arr = [1,2,2,2,2,3,3,3,3 ,10, 23, 442, 213, 2,12,23,2,34123];

console.log(Array.from(new Set(arr)));
