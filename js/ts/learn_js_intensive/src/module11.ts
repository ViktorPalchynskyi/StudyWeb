export class Animal {
   feed(): void { };
}
class Movable {
   move(): void { };
}

class Horse { }
interface Horse extends Animal, Movable { }

type Construct = new (...args: any[]) => {};

function applyMixins(child: Construct, parents: Construct[]) {
   parents.forEach(parent => Object.getOwnPropertyNames(parent.prototype).forEach(name => {
      child.prototype[name] = parent.prototype[name];
   }))
};

applyMixins(Horse, [Animal, Movable]);
let horse: Horse = new Horse();
horse.feed();
horse.move();