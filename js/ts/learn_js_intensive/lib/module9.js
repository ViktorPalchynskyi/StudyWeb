// 1 typeof
export const shift = (padding, input) => {
    if (typeof padding === 'number') {
        return `${Array(padding + 1).join(' ')}${input}`;
    }
    return `${padding}${input}`;
};
// 2
const log = (message) => message ? console.log(message.toUpperCase?.()) : console.log('There is no message');
// 3
const test = (x, y) => {
    if (x === y) {
        return x + y;
    }
};
const makeNoise = (animal) => {
    if ('meow' in animal) {
        animal.meow();
    }
    else {
        animal.bark();
    }
};
// 5 
function log2(date) {
    if (date instanceof Date) {
        console.log(date.getFullYear());
    }
    else {
        console.log(date.toLocaleLowerCase());
    }
}
// 6 type predicate
const isWolf = (animal) => {
    const wolf = animal;
    return (wolf.bark !== undefined &&
        typeof wolf.bark === 'function' &&
        typeof wolf.move === 'function' &&
        typeof wolf.move === 'function');
};
function move(animal) {
    if (isWolf(animal)) {
        animal.move();
    }
}
const calculateSize = (node) => {
    if (node.type === 'circle')
        node.calculate(12);
    if (node.type === 'base')
        node.calculate(12, 12);
};
