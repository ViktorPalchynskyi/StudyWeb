export interface IdLabel {
   id: number;
}

interface NameLabel {
   name: string;
}

type NameId<Label extends string | number> = Label extends number ? IdLabel : NameLabel;

const createLabel = <Label extends string | number>(label: Label): NameId<Label> => {
   throw '';
}

const a = createLabel(123);
const b = createLabel('123');

type FunctionReturn<FunctionType extends (...args: any[]) => any> =
   FunctionType extends (...args: any[]) => infer ReturnType ? ReturnType : never;

type ReturnType = FunctionReturn<typeof createLabel>