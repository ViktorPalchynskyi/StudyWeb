type Table = {
    width: number;
    height: number;
    mark: string;
};
type TKeys = keyof Table;
type Arrayish = {
    [n: string]: unknown;
};
type AKeys = keyof Arrayish;
