interface Fruit {
   name: string;
   sweetness: number;
}

interface Vegetable {
   name: string;
   hasSeed: boolean;
}

type EdibleThing = Fruit & Vegetable;

const apple: EdibleThing = { name: 'apple', sweetness: 44, hasSeed: true };