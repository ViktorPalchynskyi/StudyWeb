function Person (name, age) {
   this.name = name;
   this.age = age;
}

Person.prototype.sayHi = function() {
   console.log(`Hello, ${this.name}!`);
};

Person.prototype.sayMyAge = function() {
   console.log(`My age is ${this.name}`);
};

const personOne = new Person('Viktor', 25);
const personTwo = Object.create(personOne, {
   'sex': {
      value: 'm',
      writable: true,
      enumerable: true,
      configurable: true,
   }
});

function SoccerPlayer(name, age, isProfetionnal, goalCount) {
   Person.apply(this, arguments);
   this.isProfetionnal = isProfetionnal;
   this.goalCount = goalCount;
};

SoccerPlayer.prototype = Object.create(Person.prototype);
SoccerPlayer.prototype.constructor = SoccerPlayer;
console.log(' SoccerPlayer.prototype.constructor',  SoccerPlayer.prototype.constructor);


const ronaldo = new SoccerPlayer('Ronaldo', 38, true, 1000);
ronaldo.sayHi();