interface Animal {
    eat: (...args: any[]) => void;
    move: (...args: any[]) => void;
    color: string;
    age: number;
}
interface Owner {
    name: string;
    surname: string;
    age: number;
}
interface Dog extends Animal {
    barg: () => void;
    name: string;
    owner?: Owner;
}
declare class Bulldog implements Dog {
    name: string;
    owner?: Owner | undefined;
    color: string;
    age: number;
    constructor(name: string, owner: Owner | undefined, color: string, age: number);
    barg(): void;
    eat(...args: any[]): void;
    move(...args: any[]): void;
}
declare const mishaDog: Bulldog;
