// Только строки или числа, компилируется в объект, константрый enum в значение
export enum Size {
   s = '0',
   m = '1',
   l = '2',
}

const size: Size = Size.l;

const enum NewOne {
   film = '123',
   miniSeries = '23',
}

export const some = {
   s: '0',
   m: '1',
   l: '2',
} as const;