const id = Symbol('nanan');
const id2 = Symbol('id');

const ViktorSymbol = Symbol('Viktor');

const user = {
   name: 'Viktor',
   [ViktorSymbol]: 'tensai',
};
user[id2] = '123';

console.log(id.description);
console.log(id2.toString());
console.log(user[id2]);
console.log(user['id']);
console.log(user[ViktorSymbol]);

const jaja = Symbol.for('jaja');
const jaja2 = Symbol.for('jaja');
const jajaName = Symbol.keyFor(jaja);

console.log(jaja === jaja2);
console.log(jajaName);
