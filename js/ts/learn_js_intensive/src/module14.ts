export const strConst = '';

function call<Args extends any[], ReturnType>(calledFucntion: (...args: Args) => ReturnType, ...args: Args) {
   return calledFucntion(...args);
}

type FunctionReturn<FunctionType extends (...args: any[]) => any> = FunctionType extends (...args: any[]) => infer ReturnType ? ReturnType : never;

// type ReturnType = FunctionReturn<typeof call<(args: ...any[]) => number, any[]>>;