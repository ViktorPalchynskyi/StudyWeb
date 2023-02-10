const sayHelloMixin = {
   sayHello() {
      console.log(`Hello ${this.name}`);
   },
   sayAge() {
      console.log(`My age is ${this.age}`);
   }
};

class User {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   sayChikiBriki() {
      console.log('Chikiii Brikiii v damki');
   }
};

Object.assign(User.prototype, sayHelloMixin);
const user = new User('Viktor', 25);

const eventMixin = {
   on(eventName, eventHandler) {
      if(!this._eventHandlers) this._eventHandlers = {};
      if(!this._eventHandlers[eventName]) this._eventHandlers[eventName] = [];
      this._eventHandlers[eventName].push(eventHandler);
   },
   off(eventName, hendler) {
      const handlers = this._eventHandlers && this._eventHandlers[eventName];
      if (!handlers) return;
      for(let i=0; i < handlers.length; i++) {
         if(handlers[i] === hendler) {
            handlers.splice(--i, 1);
         }
      }
   },
   trigger(eventName, ...args) {
      if (!this._eventHandlers || !this._eventHandlers[eventName]) return;
      this._eventHandlers[eventName].forEach(event => event.apply(this, args));
   }
};

class Menu {
   choose(value) {
      this.trigger('select', value);
   }
}

Object.assign(Menu.prototype, eventMixin);

const menu = new Menu();
menu.on('select', value => console.log(`Selected value is ${value}`));
menu.on('select', value => console.log(`Idi nahuy so svoey ${value}`));

menu.choose('chiki briki');