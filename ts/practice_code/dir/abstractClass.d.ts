declare abstract class Base {
    abstract getName(): string;
    printName(): void;
}
declare class BaseThing extends Base {
    getName(): string;
}
declare const b: BaseThing;
declare abstract class MyNode {
    private width;
    private height;
    constructor(width: number, height: number);
    abstract paint(): void;
    abstract calculateSize(): void;
}
declare class CircleNode extends MyNode {
    paint(): void;
    calculateSize(): void;
}
