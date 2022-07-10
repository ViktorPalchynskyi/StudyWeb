const person = {
   get name() {
      return this._name;;
   }, 
   set name(value) {
      if(value.length < 4) return console.log('Name should be more than 3 characters.');
      this._name = value;
   }
}

person.name = 'vikt';

console.log(person.name);
