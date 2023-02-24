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
};
type DragonSetters = {
    [Property in keyof Dragon as `set${Capitalize<Property>}`]: (val: Dragon[Property]) => void;
};
type Getters<Type extends object> = {
    [Property in keyof Type as `get${Capitalize<Property & string>}`]: () => Type[Property];
};
type Setters<Type extends object> = {
    [Property in keyof Type as `set${Capitalize<Property & string>}`]: (val: Type[Property]) => void;
};
type CompleteType<T extends object> = T & Getters<T> & Setters<T>;
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
declare const filmOne: Movie;
declare const seriesOne: Movie;
declare function getMyProperty<Type extends object, Key extends keyof Type>(obj: Type, key: Key): Type[Key];
declare const myProp: (string | MovieActor<"oscar" | "goldLion">)[];
