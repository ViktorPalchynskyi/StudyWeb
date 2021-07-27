class EdibleThing {
   name: string;
   color: string;
   constructor(name: string, color: string) {
      this.name = name;
      this.color = color;
   }
}

class Fruit extends EdibleThing {
   sweetness: number;

   constructor(name: string, color: string, sweetness: number) {
      super(name, color);
      this.sweetness = sweetness;
   }

   fullName(): string {
      const isSweet: boolean = this.sweetness > 50;
      return `${isSweet ? 'Sweet' : ''} ${this.color} ${this.name}`;
   };
}

const apple = new Fruit('Apple', 'Red', 55);

console.log(apple.fullName());

const fruitBasket: Fruit[] = [];

fruitBasket.push(new Fruit('Banana', 'Yellow', 103));
console.log(fruitBasket);

class Vegetable {
   static timeToCook: number = 5;
   static cookVegetable(vegetable: Vegetable): void {
      setTimeout(() => console.log(`Cooked ${vegetable.name}`), Vegetable.timeToCook * 1000);
   }
   name: string;
   constructor(name: string) {
      this.name = name;
   }
}

Vegetable.cookVegetable(new Vegetable('Tomato'));

abstract class Some {
   name: string;
   abstract doSomething(): void;

   constructor(name: string) {
      this.name = name;
   }
}

class Fruit2 extends Some {
   constructor(name: string) {
      super(name);
   }
   doSomething() {
      console.log(`Yum. ${this.name}s are tasty.`);
   }
}

const fruit: Fruit2 = new Fruit2('Mellon');
fruit.doSomething();

