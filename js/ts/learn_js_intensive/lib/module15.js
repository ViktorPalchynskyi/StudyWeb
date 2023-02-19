"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nuni = void 0;
var nuni = 123;
// import Reflect from 'reflect-metadata';
// export class Test {
//    @Logger('=')
//    calculate() {
//       // logic
//    }
// }

// function Logger(test: string) {
//    return (target: Object, propertyName: string, descriptor: PropertyDescriptor) => {
//       const method = descriptor.value;
//       descriptor.value = function (...args: any[]) {
//          console.log(new Array(10).join(test));
//          console.time(propertyName);
//          const result = method.apply(this, args);
//          console.timeEnd(propertyName);
//          console.log(new Array(10).join(test));
//          return result;
//       }
//    };
// }

// type Constructor = new (...args: any[]) => {};

// @Injectable({
//    providerIn: 'root'
// })
// class UserService { }

// interface InfectOptions {
//    providerIn: string;

// }

// const injectableMetaKey = 'InjectableMeta';

// function Injectable(options: InfectOptions) {
//    return (ctor: Constructor) => {
//       Reflect.difeneMetadata(injectableMetaKey, options, ctor)
//    }
// };

// function isInectOptions(metadata: unknown): metadata is InfectOptions {
//    const injectOptions = metadata as InfectOptions;

//    return 'prvodeIn' in injectOptions;
// }

// const RootInstanceMap = new Map();

// function getInstance<T>(ctor: new () => T): T {
//    const metadata = Reflect.getMetadata(injectableMetaKey, ctor);
//    if (!metadata || !isInectOptions(metadata)) {
//       return new ctor();
//    }
//    if (metadata.providerIn === 'root') {
//       if (RootInstanceMap.has(ctor)) {
//          RootInstanceMap.set(ctor, new ctor());
//       }
//       return RootInstanceMap.get(ctor);
//    }
// }
exports.nuni = nuni;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJudW5pIl0sInNvdXJjZXMiOlsiLi4vc3JjL21vZHVsZTE1LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBudW5pID0gMTIzO1xyXG4vLyBpbXBvcnQgUmVmbGVjdCBmcm9tICdyZWZsZWN0LW1ldGFkYXRhJztcclxuLy8gZXhwb3J0IGNsYXNzIFRlc3Qge1xyXG4vLyAgICBATG9nZ2VyKCc9JylcclxuLy8gICAgY2FsY3VsYXRlKCkge1xyXG4vLyAgICAgICAvLyBsb2dpY1xyXG4vLyAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIExvZ2dlcih0ZXN0OiBzdHJpbmcpIHtcclxuLy8gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHlOYW1lOiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xyXG4vLyAgICAgICBjb25zdCBtZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG4vLyAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKC4uLmFyZ3M6IGFueVtdKSB7XHJcbi8vICAgICAgICAgIGNvbnNvbGUubG9nKG5ldyBBcnJheSgxMCkuam9pbih0ZXN0KSk7XHJcbi8vICAgICAgICAgIGNvbnNvbGUudGltZShwcm9wZXJ0eU5hbWUpO1xyXG4vLyAgICAgICAgICBjb25zdCByZXN1bHQgPSBtZXRob2QuYXBwbHkodGhpcywgYXJncyk7XHJcbi8vICAgICAgICAgIGNvbnNvbGUudGltZUVuZChwcm9wZXJ0eU5hbWUpO1xyXG4vLyAgICAgICAgICBjb25zb2xlLmxvZyhuZXcgQXJyYXkoMTApLmpvaW4odGVzdCkpO1xyXG4vLyAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4vLyAgICAgICB9XHJcbi8vICAgIH07XHJcbi8vIH1cclxuXHJcbi8vIHR5cGUgQ29uc3RydWN0b3IgPSBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiB7fTtcclxuXHJcbi8vIEBJbmplY3RhYmxlKHtcclxuLy8gICAgcHJvdmlkZXJJbjogJ3Jvb3QnXHJcbi8vIH0pXHJcbi8vIGNsYXNzIFVzZXJTZXJ2aWNlIHsgfVxyXG5cclxuLy8gaW50ZXJmYWNlIEluZmVjdE9wdGlvbnMge1xyXG4vLyAgICBwcm92aWRlckluOiBzdHJpbmc7XHJcblxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBpbmplY3RhYmxlTWV0YUtleSA9ICdJbmplY3RhYmxlTWV0YSc7XHJcblxyXG4vLyBmdW5jdGlvbiBJbmplY3RhYmxlKG9wdGlvbnM6IEluZmVjdE9wdGlvbnMpIHtcclxuLy8gICAgcmV0dXJuIChjdG9yOiBDb25zdHJ1Y3RvcikgPT4ge1xyXG4vLyAgICAgICBSZWZsZWN0LmRpZmVuZU1ldGFkYXRhKGluamVjdGFibGVNZXRhS2V5LCBvcHRpb25zLCBjdG9yKVxyXG4vLyAgICB9XHJcbi8vIH07XHJcblxyXG4vLyBmdW5jdGlvbiBpc0luZWN0T3B0aW9ucyhtZXRhZGF0YTogdW5rbm93bik6IG1ldGFkYXRhIGlzIEluZmVjdE9wdGlvbnMge1xyXG4vLyAgICBjb25zdCBpbmplY3RPcHRpb25zID0gbWV0YWRhdGEgYXMgSW5mZWN0T3B0aW9ucztcclxuXHJcbi8vICAgIHJldHVybiAncHJ2b2RlSW4nIGluIGluamVjdE9wdGlvbnM7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IFJvb3RJbnN0YW5jZU1hcCA9IG5ldyBNYXAoKTtcclxuXHJcbi8vIGZ1bmN0aW9uIGdldEluc3RhbmNlPFQ+KGN0b3I6IG5ldyAoKSA9PiBUKTogVCB7XHJcbi8vICAgIGNvbnN0IG1ldGFkYXRhID0gUmVmbGVjdC5nZXRNZXRhZGF0YShpbmplY3RhYmxlTWV0YUtleSwgY3Rvcik7XHJcbi8vICAgIGlmICghbWV0YWRhdGEgfHwgIWlzSW5lY3RPcHRpb25zKG1ldGFkYXRhKSkge1xyXG4vLyAgICAgICByZXR1cm4gbmV3IGN0b3IoKTtcclxuLy8gICAgfVxyXG4vLyAgICBpZiAobWV0YWRhdGEucHJvdmlkZXJJbiA9PT0gJ3Jvb3QnKSB7XHJcbi8vICAgICAgIGlmIChSb290SW5zdGFuY2VNYXAuaGFzKGN0b3IpKSB7XHJcbi8vICAgICAgICAgIFJvb3RJbnN0YW5jZU1hcC5zZXQoY3RvciwgbmV3IGN0b3IoKSk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgcmV0dXJuIFJvb3RJbnN0YW5jZU1hcC5nZXQoY3Rvcik7XHJcbi8vICAgIH1cclxuLy8gfSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sSUFBTUEsSUFBSSxHQUFHLEdBQUc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSJ9