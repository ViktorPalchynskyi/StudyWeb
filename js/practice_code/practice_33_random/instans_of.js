const arr = [12,23,412];

console.log(arr instanceof Array);
console.log(arr instanceof Object);

const buffedToString = Object.prototype.toString;
console.log(buffedToString.call(arr));

const user = {
  [Symbol.toStringTag]: 'Viktor',
};

console.log(buffedToString.call(user));