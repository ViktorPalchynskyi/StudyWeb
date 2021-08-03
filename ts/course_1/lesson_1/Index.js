var nutritionsLisk = [{ name: 'Vitamin A', amount: 13 }, { name: 'Vitamin C', amount: 44 }];
var rectangle = { height: 22, width: 42 };
var rectangle2;
var protertyName = 'height';
console.log(rectangle[protertyName]);
var rectangle3 = { height: 44, width: 87 };
function tmp(input, some) {
    return [input.length, some + 122];
}
;
console.log('TMP:', tmp('Ya rot tvoy ebal', 11));
console.log('TMP:', tmp([12, 321, 23, 55, 123, 3, 123, 12312], 88));
var vanilaIcecream = {
    cost: 23,
    isVanila: true,
    eat: function () {
        if (this.isVanila) {
            console.log('Ahhh yeaa');
        }
        else {
            console.log('Ahhh shit');
        }
    }
};
vanilaIcecream.eat();
