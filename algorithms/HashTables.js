class HashTables {
   constructor(size=4) {
      this.keyMap = new Array(size);
   }
   _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
         let char = key[i];
         let value = char.charCodeAt(0) - 96;
         total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
   }
   set(key, value) {
      let index = this._hash(key);
      if (!this.keyMap[index]) {
         this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
      return index;
   }
   get(key) {
      let index = this._hash(key);
      if(this.keyMap[index]){
        for(let i = 0; i < this.keyMap[index].length; i++) {
           if (this.keyMap[index][i][0] === key) {
              return this.keyMap[index][i][1];
           }
        }
      }
      return false;
   }
   values() {
      let valuesArr = [];
      for (let i = 0; i < this.keyMap.length; i++) {
         if (this.keyMap[i]) {
            for (let j = 0; j < this.keyMap[i].length; j++) {
               valuesArr.push(this.keyMap[i][j][1]);
            }
         }
      }
      return [...new Set(valuesArr)];
   }
   keys() {
      let valuesArr = [];
      for (let i = 0; i < this.keyMap.length; i++) {
         if (this.keyMap[i]) {
            for (let j = 0; j < this.keyMap[i].length; j++) {
               valuesArr.push(this.keyMap[i][j][0]);
            }
         }
      }
      return [...new Set(valuesArr)];
   }
}

let ht = new HashTables();
console.log('test', ht.set('name', 'Viktor'));
console.log('test', ht.set('name1', 'Viktor'));
console.log('test', ht.set('name2', 'Lena'));
console.log('test', ht.set('name3', 'Tanya'));
console.log('test', ht.set('name4', 'Misha'));
console.log('test', ht.set('hello world', 'goodbye'));
console.log('ht', ht);
console.log('get', ht.get('name3'));
console.log('values', ht.values());
console.log('keys', ht.keys());