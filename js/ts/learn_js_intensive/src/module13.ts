export interface IdLabel {
   id: number;
}

interface NameLabel {
   name: string;
}

type NameId<Label extends string | number> = Label extends number ? IdLabel : NameLabel;

const craeteLabel = <Label extends string | number>(label: Label): NameId<Label> => {
   throw '';
};

const a = craeteLabel(123);
const b = craeteLabel('123')

a.id;
b.name;