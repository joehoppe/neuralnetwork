import { IActivate } from "../../activation/models/IActivate";

// A rudimentary implementation of a Perceptron Algorithm
export class PerceptronService {
    #weights: number[] | undefined;

    constructor(private iActivate: IActivate) {}

    setWeights(weights: number[]){
        this.#weights = weights;
    }

    compute(inputFeatures: number[]) {
        if (!this.#weights) {
            throw new Error('Weights not set');
        };

        const combinedValue = this.dotProduct(inputFeatures, this.#weights); 
        console.debug('Combined Value', combinedValue);

        return combinedValue;
    }

    evaluate(sum: number) {
        const isActivated = this.iActivate.activate(sum);

        console.debug('Is Activated', isActivated);

        return isActivated
    }

    // todo: Move to injectable interface IDotProduct
    private dotProduct(a: number[], b: number[]){
        if (a.length !== b.length) {
            throw new Error('Vectors must have the same length');
        }

        return a.reduce((sum, val, i) => sum + val * b[i], 0);
    }
}