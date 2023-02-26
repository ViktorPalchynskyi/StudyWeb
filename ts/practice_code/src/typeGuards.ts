//1. typeof Guard

export const shift = (padding: string | number, input: string) => {
   if (typeof padding === 'number') return `${Array(padding).join(' ')}${input}`
   return `${padding}${input}`
}

// 2. optional params

const myLog = (message?: string): void => {
   // if (message) return console.log(message.toUpperCase);
   // return console.log('without message');
   console.log(message ? message.toLocaleLowerCase() : 'without message');
}

// 3. проверка на равенство
const test = (x: string | number, y: number | boolean) => {
   if (x === y) {
      return x + y;
   }
}

// 4. сужение типов с помощью in
interface Cat {
   meow(): void;
};

interface Dog {
   bark(): void;
};

interface Wolf extends Dog {
   walk(): void;
}

const makeNoise = (animal: Cat | Dog) => {
   if ('meow' in animal) {
      animal.meow();
   } else {
      animal.bark();
   }
};


// 5. использование instanseof
function log2(date: Date | string) {
   if (date instanceof Date) {
      console.log(date.getFullYear());
   } else {
      console.log(date.toLocaleLowerCase());

   }
}

// 6. type predicate. Описать тип данных, который приходит с бэка как unknown, в функции проверить является ли он тем, что я хочу и исплозовать дальше
const isWolf = (animal: unknown): animal is Wolf => {
   const wolf = animal as Wolf;

   return (
      wolf.bark !== undefined &&
      typeof wolf.bark === 'function' &&
      wolf.walk !== undefined &&
      typeof wolf.walk === 'function'
   );
}

function walk(animal: unknown): void {
   if (isWolf(animal)) {
      animal.walk();
   }
}

// 7 

interface MyCircleNode {
   type: 'circle';
   calculate(r: number): void;
}

interface MySipleNode {
   type: 'base',
   calculate(height: number, width: number): void;
}

const calculateSize = (node: MyCircleNode | MySipleNode) => {
   if (node.type === 'circle') {
      node.calculate(19);
   }
   if (node.type === 'base') {
      node.calculate(12, 12);
   }
};