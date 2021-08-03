interface Fruit {
   name: string;
   color: string;
   nutritions: { name: string, amount: number }[];
}

type FruitNutritionList = Fruit['nutritions'];

const nutritionsLisk: FruitNutritionList = [{ name: 'Vitamin A', amount: 13 }, { name: 'Vitamin C', amount: 44 }];

interface Rectangle {
   height: number;
   width: number;
}

let rectangle: Rectangle = { height: 22, width: 42 };
let rectangle2: typeof rectangle;

type RectangleProperties = keyof Rectangle;

const protertyName: RectangleProperties = 'height';
console.log(rectangle[protertyName]);

let rectangle3: Rectangle = { height: 44, width: 87 } as const;


function tmp(input: string, some: number): [number, number];
function tmp(input: unknown[], some: number): [number, number];
function tmp(input: any, some: any): [number, number] {
   return [input.length, some + 122];
};

console.log('TMP:', tmp('Ya rot tvoy ebal', 11));
console.log('TMP:', tmp([12, 321, 23, 55, 123, 3, 123, 12312], 88));


interface Vanila {
   cost: number;
   isVanila: boolean;
}

const vanilaIcecream = {
   cost: 23,
   isVanila: true,
   eat(this: Vanila) {
      if (this.isVanila) {
         console.log('Ahhh yeaa');
      } else {
         console.log('Ahhh shit');
      }
   }
}

vanilaIcecream.eat();