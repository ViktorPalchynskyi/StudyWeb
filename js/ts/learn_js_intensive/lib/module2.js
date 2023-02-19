export let isTrue = true;
let num = 10;
let float = 10.5;
let biary = 0b101;
let bigNamber = 100n;
let str = 'string';
let some = null;
let some2 = undefined;
let obj = { a: 'hello there', b: 24 };
let array = ['asdf', '', 'check'];
const tupleL = [1, 2];
function func(callback) {
    if (callback) {
        return callback('');
    }
    return '';
}
const arrowFunction = (a) => { };
let anyLet;
anyLet = '';
anyLet = 12;
anyLet = () => console.log('lox');
//
let unknownLet = anyLet;
let moreAny = unknownLet;
// безопасная версия any, использовать, когда тип, который приходит с бэка неизвестен
// unknownLet.a;
// let numLer: number = unknownLet;
// void - когда в функции нет return;
// never
// Literal type
let fontWeight = 500;
let display = 'flex';
// Uninon type
let fontWeight2 = 500;
let display2 = 'flex';
let strNum = 123;
