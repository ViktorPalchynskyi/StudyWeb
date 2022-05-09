function sameFrequency(num1, num2) {
      if (num1 < 0 || num2 < 0) return false;
      const num1Str = num1.toString();
      const num2Str = num2.toString();
      let num1FrequencyCounter = {};
      let num2FrequencyCounter = {};
      for (const num of num1Str) {
         num1FrequencyCounter[num] = (num1FrequencyCounter[num] || 0) + 1; 
      }
      for (const num of num2Str) {
         num2FrequencyCounter[num] = (num2FrequencyCounter[num] || 0) + 1; 
      }
      
      console.log(num1FrequencyCounter, num2FrequencyCounter);
      for (const key in num1FrequencyCounter) {
      if (!(key in num2FrequencyCounter)) return false;
      if (num1FrequencyCounter[key] !== num2FrequencyCounter[key]) return false;
      }
      return true;
 }

console.log(sameFrequency(128, 812));