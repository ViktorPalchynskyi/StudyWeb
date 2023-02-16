function MyFirstModule() {
   var some = 'jaja';
   var tmp = 'misha';

   function someFunc(str) {
      console.log(`${some} --> ${str}`);
   }

   function tmpFunc(str) {
      console.log(`${tmp} ==> ${str}`);
   }

   return {
      someFunc,
      tmpFunc,
   };
};

const firsModule = MyFirstModule();

firsModule.someFunc('nana');
firsModule.tmpFunc('lox');

const secondModule = (function MySecondModule() {
   var some1 = 'mumu';
   var tmp2 = 'gulnara';

   function mumuFunc(str) {
      console.log(`${some1} --> ${str}`);
   }

   function nameFunc(str) {
      console.log(`${tmp2} ==> ${str}`);
   }

   return {
      mumuFunc,
      nameFunc,
   };
})();

secondModule.mumuFunc('nunu');
secondModule.nameFunc('shabolda');

const myProModules = (function Manager() {
   const modules = {};
   function define(name, deps, impl) {
      for (let i = 0; i < deps.length; i++) {
         deps[i] = modules[deps[i]];
         console.log('deps[i]', deps[i]);
      }
      console.log('deps', deps);
      modules[name] = impl.apply(impl, deps);
   }

   function get(name) {
      return modules[name];
   }

   return {
      define,
      get,
   };
})();

myProModules.define('bar', [], function() {
   const apiVerstion = 'V3';

   function getApiName(name) {
      return `API name is: ${name}. And Verstion is: ${apiVerstion}`;
   }

   return {
      getApiName,
   };
});

myProModules.define('foo', ['bar'], function(bar) {
   const owner = 'Viktor Palchynskyi';

   function addOwner() {
      console.log(`${bar.getApiName('buyaya')}. And owner is ${owner}`);
   }

   return {
      addOwner
   };
});

const bar = myProModules.get('bar');
const foo = myProModules.get('foo');

console.log(bar.getApiName('ralala'));
foo.addOwner();