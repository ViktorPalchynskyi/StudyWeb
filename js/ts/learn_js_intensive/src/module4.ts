interface Owner {
   name: string;
   age: number;
}

interface Pet {
   owner?: Owner;
}

interface Animal {
   readonly color: string;
}

interface Dog extends Pet, Animal {
   weight: number;
   color: 'black' | 'white' | 'fawn' | 'golden';
}

interface Cat extends Pet {
   name: string;
}

const owner: Owner = { name: 'Viktor', age: 25 };

const cat: Cat = { name: 'Gav Gav' };

export const dog: Dog = {
   weight: 12,
   color: 'fawn',
   owner
};

const corgi: Dog = {
   weight: 9,
   color: 'golden',
   owner
};