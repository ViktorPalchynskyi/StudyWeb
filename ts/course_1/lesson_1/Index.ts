let girlName = 'Tanya';
let obj: object;



obj = { some: 10 };

console.log('TS', obj);

const dota: {
   isTrash: boolean,
   heroCount: number,
   youreNickName: string
} = {
   isTrash: true,
   heroCount: 109,
   youreNickName: 'V-Deus'
};

console.log('Dota', dota);

const { youreNickName: number } = dota;

console.log('Number', number);


const guesRandomNumber = (gues: number): boolean => {
   const randomNamber = Math.round((Math.random() * 10));
   console.log('Random Number', randomNamber);
   return randomNamber === gues;
}

console.log('RandomNumber', guesRandomNumber(4));

/* eslint-disable @typescript-eslint/no-unused-vars */
// Adding Type Annotations
// Replace the `unknown` type annotations with the correct type
let guestCount: number = 50;

let favoriteDessert: string = "Cheesecake";

const ingredients: string[] = [
   "butter",
   "flour",
   "baking powder",
   "sugar",
   "eggs",
   "vanilla",
   "salt"
];

// Correcting Variable Values
const menu: {
   courses: number;
   veganOption: boolean;
   drinkChoices: string[];
} = {
   courses: 5,
   veganOption: true,
   drinkChoices: ['ramen', 'sushi', 'mochi']
};

// Function Annotation
const apple: {
   name: string,
   color: string,
   sweetness: number
} = {
   name: "Apple",
   color: "red",
   sweetness: 80
};

function eatFruit(fruit: { name: string }) {
   if (fruit.name === "Apple") {
      console.log("I love apples!");
   }
   console.log("Fruit is very tasty.");
}

eatFruit(apple);

function transformFruit(
   fruitList: string[],
   transformFunction: (fruitName: string) => string
) {
   return fruitList.map(transformFunction);
}

const fruitList = ["Apple", "Banana", "Orange"];

function bakeFruit(fruitName: string) {
   return `Baked ${fruitName}`;
}

const bakedFruit = transformFruit(fruitList, bakeFruit);
