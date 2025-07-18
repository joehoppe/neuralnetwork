import { IActivate } from "../models/IActivate";

export class BinaryStepService implements IActivate {
    constructor(private threshold: number) {}

    activate(combinedValue: number) {
        return Math.max(combinedValue, this.threshold);
    }
}