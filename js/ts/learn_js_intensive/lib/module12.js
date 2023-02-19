export class Animal {
    feed() { }
    ;
}
class Horse extends Animal {
}
function Movable(Base) {
    return class BaseWithMove extends Base {
        constructor() {
            super(...arguments);
            this.speed = 0;
        }
        move() { }
    };
}
;
const MovableHorse = Movable(Horse);
const horse = new MovableHorse();
horse;
