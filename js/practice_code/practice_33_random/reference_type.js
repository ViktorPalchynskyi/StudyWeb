const obj = {
   name: 'Viktor',
   sayHi() {
      console.log(`Hello, ${this.name}`);
   },
   sayBye() {
      console.log('Bye bey, bitch!');
   }
}
obj.sayBye();
(obj.name === 'Viktor' ? obj.sayHi : obj.sayBye)();

 // Ошибка, потому что значением this является undefined