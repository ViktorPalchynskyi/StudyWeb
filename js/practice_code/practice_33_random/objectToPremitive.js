const obj = {
   name: 'Viktor',
   money: 10000,
   [Symbol.toPrimitive](hint) {
      console.log('hint', hint);
      return hint === 'sting' ? `and his name is ${this.name} Cena` : this.money; 
   }
};

const user = {
   name: 'John',
   toString() {
      return '2';
   },
   // valueOf() {
   //    return 22;
   // } 
};

console.log(user);
console.log(+user);
console.log(user + 5000);
console.log(user * 5000);