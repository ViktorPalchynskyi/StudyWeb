export default class User {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   
   sayMyName() {
      console.log(`${this.name}`);
   }
}