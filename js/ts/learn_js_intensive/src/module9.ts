// 1 typeof

export const shift = (padding: number | string, input: string) => {
   if (typeof padding === 'number') {
      return `${Array(padding + 1).join(' ')}${input}`
   }
   return `${padding}${input}`;
}

// 2

const log = (message?: string): void => message ? console.log(message.toUpperCase?.()) : console.log('There is no message');

// 3

const test = (x: string | number, y: number | boolean) => {
   if (x === y) {
      return x + y;
   }
}

// 4 

interface Cat {
   meow(): void;
}


interface Dog {
   bark(): void;
}

interface Wolf {
   bark(): void;
   move(): void;
}


const makeNoise = (animal: Cat | Dog) => {
   if ('meow' in animal) {
      animal.meow();
   } else {
      animal.bark();
   }
}

// 5 

function log2(date: Date | string) {
   if (date instanceof Date) {
      console.log(date.getFullYear());
   } else {
      console.log(date.toLocaleLowerCase());
   }
}

// 6 type predicate
const isWolf = (animal: unknown): animal is Wolf => {
   const wolf = animal as Wolf;
   return (
      wolf.bark !== undefined &&
      typeof wolf.bark === 'function' &&
      typeof wolf.move === 'function' &&
      typeof wolf.move === 'function');
}

function move(animal: unknown): void {
   if (isWolf(animal)) {
      animal.move();
   }
}

// 7 

interface CircleNode {
   type: 'circle';
   calculate(r: number): void;
}

interface Node {
   type: 'base';
   calculate(width: number, height: number): void;
}

const calculateSize = (node: CircleNode | Node) => {
   if (node.type === 'circle') node.calculate(12);
   if (node.type === 'base') node.calculate(12, 12);
};