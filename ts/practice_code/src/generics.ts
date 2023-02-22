

const number = identity(123);
const str = identity('some');

function logginIdentity<Type>(arg: Array<Type>): Array<Type> {
   console.log('length', arg.length);
   return arg;
};

interface IdentityFunc<Type> {
   (arg: Type): Type;
};

function identity<T>(arg: T): T {
   return arg;
};

const typeArr = logginIdentity([2, 3, 4,]);
const identifier: IdentityFunc<number> = identity;

class GenerecNumber<NumType> {
   zeroValue: NumType;

   constructor(zeroValue: NumType) {
      this.zeroValue = zeroValue;
   }

   add(x: NumType, y: NumType) {
      if (typeof x === 'number' && typeof y === 'number') {
         return x + y;
      };
      return;
   };
};

let myGenericNumber = new GenerecNumber<number>(0);
// myGenericNumber.add = function (a, b) { return a + b };

console.log('bla', myGenericNumber.add({ a: 22 }.a, 15));

interface Lengthwise {
   length: number;
}

function logger<Type extends Lengthwise>(arg: Type): Type {
   console.log('arg', arg.length);
   return arg;
}

logger([23, 2123, 33, 22, 123]);

function getProperty<Type extends {}, Key extends keyof Type>(obj: Type, key: Key) { return obj[key] };

console.log('getProperty', getProperty({ a: 10, b: 15, c: 22 }, 'c'));

function create<Type>(c: { new(): Type }): Type {
   return new c();
};

class LivingThing {
   isAlive: boolean = true;
};

class ZooKeeper {
   nametag: string = 'Misha';
};

class Lion extends LivingThing {
   keeper: ZooKeeper = new ZooKeeper();
};

function crateInstanse<A extends LivingThing>(c: new () => A): A {
   return new c();
};

console.log('Lion', crateInstanse(Lion).keeper.nametag);


