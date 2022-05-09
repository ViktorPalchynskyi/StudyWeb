
class Animal {
   constructor(name) {
      this.name = name;
   }

   walk() {
      console.log('It can walk');
   }

   swim() {
      console.log('It can swim');
   }

   fly() {
      console.log('It can fly');
   }
}

class Dog extends Animal {

}

class Eagle extends Animal {

}

class Whale extends Animal {

}

const dog = new Dog('Rex');

dog.walk();