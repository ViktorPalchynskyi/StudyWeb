function Person(first, last, age, gender, interests = []) {
   this.name = { 
      first,
      last,
   };
   this.age = age;
   this.gender = gender;
   this.interests = interests;
};

Person.prototype.greeting = function() {
   console.log(`Hi I'm ${this.name.first}`);
};

Person.prototype.countInterests = function () {
   return this.interests.length;
};

function Teacher(first, last, age, gender, interests, subject) {
   Person.call(this, first, last, age, gender, interests,);

   this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Object.defineProperty(Teacher.prototype, 'constructor', {
   value: Teacher,
   enumerable: false,
   writable: true,
});

Teacher.prototype.greeting = function() {
   let prefix;
 
   if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
     prefix = 'Mr.';
   } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
     prefix = 'Mrs.';
   } 
 
   console.log(`Hello. My name is ${prefix} ${this.name.last} and I teach ${this.subject}`);
};

Teacher.prototype.countInterests = function () {
   let defauldCount = Person.prototype.countInterests.call(this);
   return ++defauldCount;
};

const sensei = new Teacher('Satoshi', 'Tanaka', 22, 'm', ['anime', 'manga', 'sudoku'], 'Art');

console.log('sensei', sensei);
sensei.greeting();

console.log('new counter', sensei.countInterests());
