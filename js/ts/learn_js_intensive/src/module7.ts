export class Dog {
   public name: string;
   constructor(public color: string, name: string) {
      this.name = name;
   }
}

class SuperDog extends Dog {
   constructor(public color: string, name: string) {
      super(name, color);
   }
}

const dog = new Dog('black', 'gav gav');
const dog1 = new SuperDog('black', 'gav gav');
dog.color;