import { IActivate } from '../models/IActivate';

export class LinearService implements IActivate {
  constructor() {}

  activate = (input: number) => input;
}
