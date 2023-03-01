const map = new Map();
let vityan = { name: 'Viktor', age: 25 };


map.set('123', 'nana');
map.set(vityan, { isTheBest: true });
map.set(false, '122');
map.set(12354, 422);
map.delete(false);
// console.log(map);
// console.log(map.get(false));
// console.log(map.size);

// console.log(map.has(vityan));
// console.log(map.get(vityan));

const map2 = new Map([
   [{ name: 'Misha'}, 'tut'],
   [86, 'cool'],
   [['kkk', '23'], 'nana'],
]);

for (const key of map2.keys()) {
   // console.log(key);
}

for (const value of map2.values()) {
   // console.log(value);
}

for (const entries of map2.entries()) {
   // console.log(entries);
}

map2.forEach((value, key, map) => {
   // console.log(`${value} in ${key} on ${map}`);
})

const sobaka = {
   name: 'bobik',
   age: 2,
   color: 'red'
};

const map3 = new Map(Object.entries(sobaka));

console.log(map3.get('name'));
console.log(map3.size);

const map4 = new Map();

map4.set('monkey', 'mmm monkey');
map4.set('panda', 'po');
map4.set('tortoise', 'og wey');

const obj = Object.fromEntries(map4);
console.log(obj);
