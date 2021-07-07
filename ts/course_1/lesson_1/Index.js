var girlName = 'Tanya';
var obj;
obj = { some: 10 };
console.log('TS', obj);
var dota = {
    isTrash: true,
    heroCount: 109,
    youreNickName: 'V-Deus'
};
console.log('Dota', dota);
var number = dota.youreNickName;
console.log('Number', number);
var guesRandomNumber = function (gues) {
    var randomNamber = Math.round((Math.random() * 10));
    console.log('Random Number', randomNamber);
    return randomNamber === gues;
};
console.log('RandomNumber', guesRandomNumber(4));
