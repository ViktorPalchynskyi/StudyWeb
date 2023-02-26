export class Animal {
   feed(): void { }
}

class Horse extends Animal { }

type Constructor = new (...args: any[]) => {};

// альтернатива миксинам
function Movable<BaseConstuctor extends Constructor>(Base: BaseConstuctor) {
   return class BaseWithMove extends Base {
      speed: number = 0;
      move() { }
   }
};

const MovableHorse = Movable(Horse);
const horseOne = new MovableHorse();
horseOne.feed();