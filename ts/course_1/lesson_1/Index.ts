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
