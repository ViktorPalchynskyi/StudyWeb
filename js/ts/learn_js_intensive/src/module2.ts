export let isTrue: boolean = true;

let num: number = 10;
let float: number = 10.5;
let biary: number = 0b101;

let bigNamber: bigint = 100n;

let str: string = 'string';

let some: null = null;

let some2: undefined = undefined;

let obj: { a: string, b: number } = { a: 'hello there', b: 24 };

let array: string[] = ['asdf', '', 'check'];

const tupleL: [number, number] = [1, 2];

function func(callback: (a: string) => string): string {
   if (callback) {
      return callback('');
   }
   return '';
}

const arrowFunction = (a: string): void => { };

let anyLet: any;
anyLet = '';
anyLet = 12;
anyLet = () => console.log('lox');

//
let unknownLet: unknown = { a: '' };

// безопасная версия any, использовать, когда тип, который приходит с бэка неизвестен
// unknownLet.a;
// let numLer: number = unknownLet;

// void - когда в функции нет return;

// never

// Literal type
let fontWeight: 500 = 500;
let display: 'flex' = 'flex';

// Uninon type

let fontWeight2: 500 | 600 | 700 | 'bold' = 500;
let display2: 'flex' = 'flex';

let strNum: string | number = 123;