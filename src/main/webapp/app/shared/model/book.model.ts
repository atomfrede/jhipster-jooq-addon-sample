export interface IBook {
  id?: number;
  title?: string;
}

export class Book implements IBook {
  constructor(public id?: number, public title?: string) {}
}
