export type Error = {
   type: string;
   [key: string]: unknown;
}

type Record = {
   [key: string]: string;
}

interface Owner {
   name: string;
   age: number;
}

// in keyof Owner достоём ключ, Owner[Property] достоём ключ
type PartialOwner = {
   [Property in keyof Owner]?: Owner[Property];
}

type ReadOnlyOwner = {
   readonly [Property in keyof Owner]?: Owner[Property];
}

type NotReadOnlyOwner = {
   -readonly [Property in keyof Owner]?: Owner[Property];
}

type RequiredOwner = {
   readonly [Property in keyof Owner]-?: Owner[Property];
}

// implementing getters for class
type OwnerGetters = {
   [Property in keyof Owner as `get${Capitalize<Property>}`]: () => Owner[Property];
}

type OwnerSetters = {
   [Property in keyof Owner as `set${Capitalize<Property>}`]: (value: Owner[Property]) => void;
}

// type CompliteType<T> =

// class Example implements Owner, OwnerGetters, OwnerSetters {

// }