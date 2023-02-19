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
export declare const dog: Dog;
export {};
