module.exports = {
   forEach(arr, fn) {
      for (const index in arr) {
         const value = arr[index];
         fn(value, index);
      }
   }, 
   map(arr, fn) {
      let newArr = [];
      for (const index in arr) {
         const value = arr[index];
         newArr.push(fn(value, index));
      }
      return newArr;
   }
};