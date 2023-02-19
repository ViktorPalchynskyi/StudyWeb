interface Owner {
   name: string;
   age: number;
}

export type Getters<Structure extends object> = {
   [Property in keyof Structure as `get${Capitalize<Property & string>}`]: () => Structure[Property];
};
