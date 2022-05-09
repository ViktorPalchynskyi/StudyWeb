// check
function minSubArrayLen(nums, sum) { 
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while(start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end-start);
      total -= nums[start];
      start++;
    } else { 
      break;
    }
  } 
  return minLen === Infinity ? 0 : minLen;
}

// check
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  console.log('seen', seen);
  return longest;
}

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

function collectOddValues(arr) {
  let result = [];

  function helper(helpArr) { 
    if (!helpArr.length) return;
    if (helpArr[0] % 2 !== 0) result.push(helpArr[0]);
    helper(helpArr.slice(1));
   }
   
   helper(arr);
   return result;
}
function power(number, exponent) {
  return !exponent ? 1 : number * power(number, exponent - 1);
}

function factorial(number){
  return !number || number === 1 ? 1 : number * factorial(number - 1);
}

function productOfArray(arr) {
  return !arr.length ? 1 : arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(num){
  return !num ? 0 : num + recursiveRange(num - 1);
}

// check 
function fib(num){
  return num <=2 ? 1 : fib(num - 1) + fib(num -2);
}

function reverse(str) {
  return !str.length ? '' : str[str.length -1] + reverse(str.slice(0, -1));
}

function isPalindrome(str) { 
  if (!str.length) return true;
  return str[0] === str[str.length - 1] ? isPalindrome(str.slice(0, -1).slice(1)) : false;
}

// check
function someRecursive(array, callback) {
  if (!array.length) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
}

// check
function flatten(arr){
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


// My version 
// function capitalizeFirst (arr) {
//   let newArr = [];

//   function helper(helperArr) {
//     if (!helperArr[0]) return;
//     const firstChar = helperArr[0][0].toUpperCase();
//     let str = helperArr[0].slice(1);
//     str = firstChar + str;
//     newArr.push(str);
//     helper(helperArr.slice(1));
//   }

//   helper(arr);
//   return newArr;
// }

function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}

function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
}

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

function digitize(n) {
  const numbers = n.toString();
  let arr = [];
  for (let i = 0; i < numbers.length; i++ ) {
    arr.push(+numbers[numbers.length - 1 - i]);
  }
  return arr;
}

// console.log('digitize', digitize(35231));

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

// function binarySearch(arr, value) {
//   let left = 0;
//   let rigth = arr.length - 1;

//   while(rigth > left) {
//     let pivot = Math.round((left + rigth) / 2);
//     if (arr[pivot] > value) { 
//       rigth = pivot - 1;
//     } else if (arr[pivot] < value) {
//       left = pivot + 1;
//     } else {
//       return pivot;
//     }
//   }
//   return -1;
// }

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
      if(elem < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

function nestedEvenSum (obj) {
  let sum = 0;
  for (const key in obj) {
      if (typeof obj[key] === 'number' && obj[key] % 2 === 0) sum += obj[key]
      else if (typeof obj[key] === 'object') sum += nestedEvenSum(obj[key]);
  } 
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

function stringifyNumbers(obj) {
  let newObj = {};
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = String(obj[key]);
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    } 
  }
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}

function collectStrings(obj) {
  let strArr = [];
  for (const key in obj) {
      if (typeof obj[key] === 'string') strArr.push(obj[key]);
      else if (typeof obj[key] === 'object') strArr = strArr.concat(collectStrings(obj[key]));
  } 
  return strArr;
}

const obj22 = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      },
      some: {
        zz: 'zz',
        ff: {
          js: 'jp',
        },
        zzc: '123'
      }
  }
};

// Хорошо работает с практически отсортированными массивами
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j <= i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          noSwaps = false;
        }  
    }    
    if(noSwaps) break;
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (arr[i] !== arr[min]) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr; 
}

// Хорошо работает с практически отсортированными массивами и если данный поступают в массив постоянно
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curVal = arr[i];  
    let j = i - 1; 
    for (j; j >= 0 && arr[j] > curVal; j--) {
        if (arr[j] > curVal) {
            arr[j + 1] = arr[j];
        }
    } 
    arr[j + 1] = curVal;
  }
  return arr;
}

// console.log('insertionSort', insertionSort([2,5,16,1,66,223,63,-2,7,99, -12]));

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let resArr = [];
  while(arr1.length > i && arr2.length > j) {
    if (arr1[i] > arr2[j]) {
      resArr.push(arr2[j]);
      j++;
    } else {
      resArr.push(arr1[i]);
      i++;  
    }
  }
  while(arr1.length > i) {
    resArr.push(arr1[i]);
    i++;
  }
  while(arr2.length > j) {
    resArr.push(arr2[j]);
    j++;
  }
  return resArr;
}

function mergeSort(arr) {
  if (arr.length <= 1)  return arr;
  let left = arr.slice(0 ,Math.round(arr.length / 2));
  let right = arr.slice(Math.round(arr.length / 2));
  return merge(mergeSort(left), mergeSort(right));
}

// console.log('mergeSort', mergeSort([55,5,7,7,2,63]));

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function getPivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = getPivot(arr, left, right); 
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
 return arr; 
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(digitCount(nums[i]), maxDigits);    
  }
  return maxDigits;
}
// O(nk) n длинна массива, k количество знаков в числе (10 = 2, 24215 = 5)
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
      let digitBuckets = Array.from({ length: 10 }, () => []);
      for (let i = 0; i < nums.length; i++) {
        digitBuckets[getDigit(nums[i], k)].push(nums[i]);
      }  
      nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log('radixSort', radixSort([23, 532, 2345,33, 1, 5452, 1290]));
