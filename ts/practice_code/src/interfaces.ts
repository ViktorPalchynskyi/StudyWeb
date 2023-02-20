interface Animal {
   eat: (...args: any[]) => void;
   move: (...args: any[]) => void;
   color: string;
   age: number;
}

interface Owner {
   name: string;
   surname: string;
   age: number;
}

interface Dog extends Animal {
   barg: () => void;
   name: string;
   owner?: Owner;
}

class Bulldog implements Dog {
   name: string;
   owner?: Owner | undefined;
   color: string;
   age: number;
   constructor(name: string, owner: Owner | undefined, color: string, age: number) {
      this.name = name;
      this.owner = owner;
      this.color = color;
      this.age = age;
   }

   barg() {
      console.log(`Dog ${this.name} bargs: gav gav`);
   };
   eat(...args: any[]) {
      console.log(`Dog ${this.name} is eating`);
   };
   move(...args: any[]) {
      console.log(`Dog ${this.name} is moving`);
   };
}

const mishaDog = new Bulldog('Misha', { name: 'The Lord of a light', surname: 'Bog', age: 10 }, 'white', 5);

mishaDog.barg();
mishaDog.eat();
mishaDog.move();