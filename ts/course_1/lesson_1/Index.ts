interface CoordinateInterface {
   x: number;
   y: number;
}

type CoordinateTurple = [number, number];
type Coordinate = CoordinateInterface | CoordinateTurple;

const extractCoordinate = (poin: Coordinate): CoordinateInterface => {
   if (Array.isArray(poin)) {
      return { x: poin[0], y: poin[1] };
   }
   return poin;
};

const getDistance = (point1: Coordinate, point2: Coordinate): number => {
   const { x: x1, y: y1 } = extractCoordinate(point1);
   const { x: x2, y: y2 } = extractCoordinate(point2);

   return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

const point1: CoordinateInterface = { x: 10, y: 14 };
const point2: CoordinateTurple = [16, 22];

console.log('Distance is', getDistance(point1, point2));

interface Fruit {
   name: string;
   sweetness: number;
}

interface Vegetable {
   name: string;
   hasSeed: boolean;
}

type union = Fruit | Vegetable;

const hasSeed = (some: union): void => {
   if ('hasSeed' in some) {
      console.log(some.hasSeed);
   }
};

const tmp: union = { name: 'Some', hasSeed: true, sweetness: 290 };

hasSeed(tmp);