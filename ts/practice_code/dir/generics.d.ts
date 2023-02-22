declare const number = 123;
declare const str = "some";
declare function logginIdentity<Type>(arg: Array<Type>): Array<Type>;
interface IdentityFunc<Type> {
    (arg: Type): Type;
}
declare function identity<T>(arg: T): T;
declare const typeArr: number[];
declare const identifier: IdentityFunc<number>;
declare class GenerecNumber<NumType> {
    zeroValue: NumType;
    constructor(zeroValue: NumType);
    add(x: NumType, y: NumType): number | undefined;
}
declare let myGenericNumber: GenerecNumber<number>;
interface Lengthwise {
    length: number;
}
declare function logger<Type extends Lengthwise>(arg: Type): Type;
declare function getProperty<Type extends {}, Key extends keyof Type>(obj: Type, key: Key): Type[Key];
declare function create<Type>(c: {
    new (): Type;
}): Type;
declare class LivingThing {
    isAlive: boolean;
}
declare class ZooKeeper {
    nametag: string;
}
declare class Lion extends LivingThing {
    keeper: ZooKeeper;
}
declare function crateInstanse<A extends LivingThing>(c: new () => A): A;
