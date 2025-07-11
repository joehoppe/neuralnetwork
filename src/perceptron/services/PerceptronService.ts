import { IActivate } from "../../activation/models/IActivate";
import { PerceptronInput } from "../models/PerceptronInput";
import { PerceptronWeightType } from "../models/PerceptronWeightType";

// A rudimentary implementation of a Perceptron Algorithm
export class PerceptronService {
    #weightTypes = new Map<string, PerceptronWeightType>;

    constructor(private iActivate: IActivate) {}

    addWeightType(weightType: PerceptronWeightType){
        this.#weightTypes.set(weightType.identifier, weightType);
    }

    compute(inputs: PerceptronInput[]) {
        const sum: any = inputs.reduce((agg: any, current) => {
            console.debug('Processing input', current.identifier, current.input);

            const weight = this.#weightTypes.get(current.identifier)?.weight;
            console.debug('Retrieved weight', weight);

            if (!weight) {
                throw new Error("Weight type not found");
            }
            
            const calculated = weight * current.input;

            console.debug('Weight * input', calculated);

            agg += calculated;
            console.debug('Interum sum', agg);
            return agg;
        }, 0);

        return sum;
    }

    evaluate(sum: number) {
        const isActivated = this.iActivate.activate(sum);

        console.debug('Is Activated', isActivated);

        return isActivated
    }
}