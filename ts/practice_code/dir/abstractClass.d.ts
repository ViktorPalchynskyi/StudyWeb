declare abstract class Base {
    abstract getName(): string;
    printName(): void;
}
declare class BaseThing extends Base {
    getName(): string;
}
declare const b: BaseThing;
