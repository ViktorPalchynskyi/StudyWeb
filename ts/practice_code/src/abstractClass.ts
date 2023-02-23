abstract class Base {
   abstract getName(): string;
   printName() {
      console.log(`Hello, ${this.getName()}`);
   }
}

class BaseThing extends Base {
   getName(): string {
      return 'world';
   }
}

const b = new BaseThing();
b.printName();

abstract class MyNode {
   constructor(private width: number, private height: number) { };
   abstract paint(): void;
   abstract calculateSize(): void;
}

class CircleNode extends MyNode {
   paint(): void {
      throw new Error("Method not implemented.");
   }
   calculateSize(): void {
      throw new Error("Method not implemented.");
   }
}