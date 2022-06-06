module.exports = {
   forEach(arr, fn) {
      for (const index in arr) {
         fn(arr[index], index);
      }
   }
}