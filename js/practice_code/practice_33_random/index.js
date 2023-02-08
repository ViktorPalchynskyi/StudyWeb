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

class User {
   constructor(name, age, status) {
      this.name = name;
      this.age = age;
      this.status = status;
      this.messageCount = 0;
      this.userCount = 0;
   }

   get name() {
      return this._name;
   }

   set name(val) {
      if (val.length < 3) {
         console.log('Name is too short');
         return;
      }
      this._name = val;
   }

   static craeteAnonUser() {
      return new User('Anon', '', '');
   }

   writeMessage(text) {
      console.log(`User ${this.name} have just wrotten a message with text: ${text}`);
      this.messageCount++;
   }

   countMessages() {
      console.log(`User: ${this.name} have send ${this.messageCount} messages`);
      return this.messageCount;
   }
}

class Admin extends User {
   constructor(name, age, status, adminLevel) {
      super(name, age, status);
      this.adminLevel = adminLevel;
   }
   checkData() {
      return console.log(`Admin ${this.name} checked data`);
   }

   countMessages() {
      let sendedMessages = super.countMessages();
      sendedMessages++;
      return sendedMessages;
   }
}

class CoffeeMachin {
   #watterAmount = 100;
   constructor(power) {
      this._power = power;
   }

   // #checkWatter(value) {
   //  if (value < 0) throw new Error("Отрицательный уровень воды");
   //  if (value > this.#waterLimit) throw new Error("Слишком много воды");
   // }

   get power() {
      return this._power;
   }
}

const superCM = new CoffeeMachin(150);

superCM.power = 123;
// superCM.#checkWatter();
superCM.#watterLimit = 1000;

console.log('superCM.power', superCM.power);
