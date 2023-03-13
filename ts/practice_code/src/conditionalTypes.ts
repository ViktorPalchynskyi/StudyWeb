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

type ReturnType = FunctionReturn<typeof createLabel>;

type MessageOf<Type> = Type extends { message: unknown } ? Type['message'] : never;

interface Email {
   message: { text: string, id: string };
}

interface Kush {
   kurlyk: () => void;
   gavGav(): void;
}

type EmailMessageContentType = MessageOf<Email>;
type KushMessageContentType = MessageOf<Kush>;

type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

type Tmp = Flatten<Array<Email>>;

type ToArray<Type> = Type extends any ? Type[] : never;
type ToArray2<Type> = [Type] extends [any] ? Type[] : never;

type StrOrNumArr = ToArray<Email | Kush>;
type StrOrNumArr2 = ToArray2<Email | Kush>;

