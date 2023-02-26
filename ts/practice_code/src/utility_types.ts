interface LandLord {
   name: string;
   surname: string;
   age: number;
   mounthlyPayment: number;
}

type PartialLandLord = Partial<Pick<LandLord, 'name' | 'age'>> & Omit<LandLord, 'name' | 'age'>;

type CustomPartial<Type, Key extends keyof Type> = Partial<Pick<Type, Key>> & Omit<Type, Key>;

type CustomReadOnly<Type, Key extends keyof Type> = Readonly<Pick<Type, Key>> & Omit<Type, Key>;

const partialLandLord: CustomPartial<LandLord, 'name' | 'age'> = {
   surname: 'Aoki',
   mounthlyPayment: 2100
};

type CatInfo = {
   color: string;
   breed: string;
};

type CatName = 'barsik' | 'myauka' | 'matroskin';

const cat: Record<CatName, CatInfo> = {
   barsik: { color: 'black', breed: 'maine coon' },
   myauka: { color: 'white', breed: 'persian' },
   matroskin: { color: 'yellow', breed: 'street cat' },
}

type A = Awaited<Promise<string>>
// const promise: A = new Promise((resolve) => resolve('lol'));
const a: A = 'str';

type Some = 'string' | undefined | null | ((...args: any) => any);

type newSome = NonNullable<Some>;

declare function f1(arg: { a: number, b: string }): () => void;

type FunctionParametersType = Parameters<typeof f1>

class TestConst {
   constructor(public a: string, public b: (...args: any) => any) { }
}

type ConstrParams = ConstructorParameters<typeof TestConst>;

type ReturnsType = ReturnType<typeof f1>;
type ReturnsType2 = ReturnType<<T extends U, U extends { a: 'lol', b: 'mmm'}>() => T>;

type InsType = InstanceType<typeof TestConst>;

type MyGetters<Type> =  {
   [Property in keyof Type as `get${Capitalize<Property & string>}`]: () => Type[Property];
};

type TestConstGetters = MyGetters<TestConst>;