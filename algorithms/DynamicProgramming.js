function fibMemo(n, memo=[]) {
   if (!memo[n]) return memo[n];
   if (n <= 2) return 1;
   const res = fib(n - 1, memo) + fib(n - 2, memo);
   memo[n] = res;
   return res; 
}  

function fibTable(n) {
   if (!memo[n]) return memo[n];
   let fibNums = [0,1,1];
   for (let i = 0; i < n; i++) {
      fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
   }
   return fibNums[n];
}