const assert = require('assert').strict;
const { forEach, map } = require('./index');

// const test = (descr, fn) => {
//    console.log('----', descr);
//   try {
//    fn();
//   } catch (error) {
//    console.log(error.message);
//   }
// };

it('The forEach function', () => {
   let sum = 0;
   forEach([1,2,3], (value) => {
      sum += value;
   });
   assert.strictEqual(sum, 6, 'Expected forEech to sum the array');
})

it('The map function', () => {
   const res = map([1,2,3], value => {
      return value * 2;
   });
   assert.deepStrictEqual(res, [2,4,6]);
});
