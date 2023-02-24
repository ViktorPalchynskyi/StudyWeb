interface Dragon {
   name: string;
   legs: number;
   haveWings: boolean;
   canUseFireBreath: boolean;
}

interface Unicorn {
   haveCorn: boolean;
   haveMagik: boolean;
   alias: string;
}

type DragonGetters = {
   [Property in keyof Dragon as `get${Capitalize<Property>}`]: () => Dragon[Property];
}

type DragonSetters = {
   [Property in keyof Dragon as `set${Capitalize<Property>}`]: (val: Dragon[Property]) => void;
}

type Getters<Type extends object> = {
   [Property in keyof Type as `get${Capitalize<Property & string>}`]: () => Type[Property];
}

type Setters<Type extends object> = {
   [Property in keyof Type as `set${Capitalize<Property & string>}`]: (val: Type[Property]) => void;
}

type CompleteType<T extends object> = T & Getters<T> & Setters<T>;

// class Example implements CompleteType<Dragon> {
//    name: string;
//    legs: number;
//    haveWings: boolean;
//    canUseFireBreath: boolean;
//    getName: () => string;
//    getLegs: () => number;
//    getHaveWings: () => boolean;
//    getCanUseFireBreath: () => boolean;
//    setName: (val: string) => void;
//    setLegs: (val: number) => void;
//    setHaveWings: (val: boolean) => void;
//    setCanUseFireBreath: (val: boolean) => void;

// }


interface TvSeriesDuration {
   seasonCount: number;
   seriesinEachSeason: number;
   seriesDuration: number;
}

interface MovieActor<Awards extends string = string> {
   name: string;
   surname: string;
   awards: Awards[];
}


interface Movie<Duration = number | TvSeriesDuration, Actor = string | MovieActor<'oscar' | 'goldLion'>> {
   title: string;
   releaseYear: number;
   actors: Actor[];
   duration: Duration;
}

const filmOne: Movie = { title: 'Avatar', releaseYear: 2012, actors: ['Lol', 'Kek'], duration: 130 };
const seriesOne: Movie = {
   title: 'Avatar', releaseYear: 2012, actors: [{ name: 'Lol Kek', surname: 'Cheburek', awards: ['oscar'] }], duration: {
      seasonCount: 4,
      seriesinEachSeason: 20,
      seriesDuration: 25,
   }
};

function getMyProperty<Type extends object, Key extends keyof Type>(obj: Type, key: Key): Type[Key] {
   return obj[key]
}

getMyProperty(filmOne, 'releaseYear');
const myProp = getMyProperty(filmOne, 'title');
console.log('myProp', myProp);
