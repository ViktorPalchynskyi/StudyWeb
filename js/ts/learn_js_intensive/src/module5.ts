// Интерфейсы для описания структур(просто расшираются), Элиасы не только описывают структуры - для сложных типов

export type Owner = {
   name: string;
   age: number;
}

type Pet = {
   owner?: Owner;
}

type Animal = {
   readonly color: string;
}

type Dog = Pet & Animal & { color: 'black' | 'white' | 'fawn' | 'golden' }

