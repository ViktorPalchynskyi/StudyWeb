export class Animal {
    feed() { }
    ;
}
class Movable {
    move() { }
    ;
}
class Horse {
}
function applyMixins(child, parents) {
    parents.forEach(parent => Object.getOwnPropertyNames(parent.prototype).forEach(name => {
        child.prototype[name] = parent.prototype[name];
    }));
}
;
applyMixins(Horse, [Animal, Movable]);
let horse = new Horse();
horse.feed();
horse.move();
