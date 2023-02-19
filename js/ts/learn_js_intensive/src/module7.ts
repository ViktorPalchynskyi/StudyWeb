abstract class Animal {
   constructor(public height: number, public weight: number) { };

   abstract move(): void;
}

export class Dog {
   constructor(private color: string, public name: string) {
      this.name = name;
   }
}

// class SuperDog extends Dog {
//    constructor(public color: string, name: string) {
//       super(name, color);
//    }
// }

const dog = new Dog('black', 'gav gav');
// const dog1 = new SuperDog('black', 'gav gav');
// dog.color;