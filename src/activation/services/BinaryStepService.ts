import { IActivate } from "../models/IActivate";

export class BinaryStepService implements IActivate {
    constructor(private threshold: number) {}

    activate(sum: number): boolean {
        return sum > this.threshold;
    }
}