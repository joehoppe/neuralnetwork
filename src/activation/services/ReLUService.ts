import { IActivate } from "../models/IActivate";

export class ReLuService implements IActivate {
    activate = (combinedValue: number) => Math.max(0, combinedValue);
}