import { IActivate } from "../models/IActivate";

export class BinaryStepService implements IActivate {
    constructor(private threshold: number) {}

    activate(combinedValue: number): boolean {
        return combinedValue > this.threshold;
    }
}