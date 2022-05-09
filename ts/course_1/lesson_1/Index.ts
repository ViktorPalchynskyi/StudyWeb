
type AppleStr = 'Apple';

type isString<T> = T extends string ? string : never;

type str = isString<AppleStr>;
type some = isString<0>

type NotNullabel<T> = T extends undefined | null ? never : T;
type NonNullabelString = NotNullabel<string | undefined | null>;

type ExcludeLetter<T, U> = T extends U ? never : T;

type FavoriteLetters = "v" | "i" | "k" | "t" | "o" | "r";

type Vowels = "a" | "e" | "i" | "o" | "u" | "y";

type NonFavorite = ExcludeLetter<Vowels, FavoriteLetters>;

function factorial(n: number): number {
   if (n === 1) return 1;
   return n * factorial(n - 1);
};

console.log(factorial(5));

type AnyFunc = (...arg: any) => any;
type MyReturnType<T extends AnyFunc> = T extends (...arg: any) => infer R ? R : any;

type ParseIntReturn = ReturnType<typeof Number.parseInt>;

type ToStringReturn = ReturnType<ParseIntReturn["toString"]>;