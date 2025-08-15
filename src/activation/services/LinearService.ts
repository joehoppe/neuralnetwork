import { IActivate } from '../models/IActivate';

export class LinearService implements IActivate {
  activate = (input: number) => input;
}
