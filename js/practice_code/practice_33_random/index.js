const user = Object.defineProperties({}, {
   name: {
      value: 'misha',
      writable: true,
      configurable: true,
      enumerable: true,
   },
   age: {
      value: 25,
      writable: true,
      configurable: true,
      enumerable: true,
   }
});

function processNums(multiplayer) {
   return (this.a + this.b) * multiplayer;
}

const objProt = { name: 'hello' };
const obj = { a: 22, b: 10 };
obj.__proto__ = objProt;

function Person(name) {
   this.name = name;
};

function Employee(name, salary) {
   this.name = name;
   this.salary = salary;
}

Person.prototype = {
   hands: 2, 
   legs: 2,
   sleep: function () {
      console.log(`${this.name} is sleeping`);
   }
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const persOne = new Person('Viktor');
const rabotyaga = new Employee('Masha', 200);

console.log('rabotyaga', rabotyaga);
rabotyaga.sleep();
