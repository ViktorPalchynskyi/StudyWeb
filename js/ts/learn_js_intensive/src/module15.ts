export class Test {
   @Logger('=')
   calculate() {
      // logic
   }
}

function Logger(test: string) {
   return (target: Object, propertyName: string, descriptor: PropertyDescriptor) => {
      const method = descriptor.value;
      descriptor.value = function (...args: any[]) {
         console.time(propertyName);
         const result = method.apply(this, args);
         console.timeEnd(propertyName);
         console.log(test);
         return result;
      }
   };
}