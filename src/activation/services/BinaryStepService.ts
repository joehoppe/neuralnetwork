import { IActivate } from '../models/IActivate';

export class BinaryStepService implements IActivate {
  constructor(private threshold = 0) {}

  activate(input: number): number {
    return input > this.threshold ? 1 : 0;
  }
}
