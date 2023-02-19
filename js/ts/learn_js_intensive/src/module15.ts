import Reflect from 'reflect-metadata';
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
         console.log(new Array(10).join(test));
         console.time(propertyName);
         const result = method.apply(this, args);
         console.timeEnd(propertyName);
         console.log(new Array(10).join(test));
         return result;
      }
   };
}

type Constructor = new (...args: any[]) => {};

@Injectable({
   providerIn: 'root'
})
class UserService { }

interface InfectOptions {
   providerIn: string;

}

const injectableMetaKey = 'InjectableMeta';

function Injectable(options: InfectOptions) {
   return (ctor: Constructor) => {
      Reflect.difeneMetadata(injectableMetaKey, options, ctor)
   }
};

function isInectOptions(metadata: unknown): metadata is InfectOptions {
   const injectOptions = metadata as InfectOptions;

   return 'prvodeIn' in injectOptions;
}

const RootInstanceMap = new Map();

function getInstance<T>(ctor: new () => T): T {
   const metadata = Reflect.getMetadata(injectableMetaKey, ctor);
   if (!metadata || !isInectOptions(metadata)) {
      return new ctor();
   }
   if (metadata.providerIn === 'root') {
      if (RootInstanceMap.has(ctor)) {
         RootInstanceMap.set(ctor, new ctor());
      }
      return RootInstanceMap.get(ctor);
   }
}