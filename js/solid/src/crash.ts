let id: number = 5;


console.log('ID', id);

let arr: number[] = [1, 2, 3, 4];
arr.push('suka');

// Union
let pid: string | number;
pid = 22;

// Enum 
enum Direction1 {
   Up,
   Down,
   Left,
   Right
};

console.log(Direction1.Down);

// Objects
type User = {
   id: number,
   name: string
};

const user: User = {
   id: 1,
   name: 'John'
};

// Type Assertion
let cid: any = 1;
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
   return x + y;
}

console.log(addNum(1, 2));

// Interfaces

interface UserInterface {
   readonly id: number
   name: string
   age?: number
};

const user1: UserInterface = {
   id: 1,
   name: 'John'
};

interface MathFunc {
   (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
   id: number
   name: string
   register(): string
};


// Classes
class Person implements PersonInterface {
   id: number;
   name: string;

   constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
   }

   register() {
      return `${this.name} is now register`;
   }
}

const brad = new Person(1, 'Brad');
const mike = new Person(1, 'Mike');

brad.id = 21;


class Employee extends Person {
   position: string;

   constructor(id: number, name: string, position: string) {
      super(id, name);
      this.position = position;
   }
}

const emp = new Employee(3, 'Shawn', 'Dev');


function getArray<T>(items: T[]): T[] {
   return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['v', 'i', 'k', 't', 'o', 'r']);

