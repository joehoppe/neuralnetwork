import { IActivate } from "../../../../src/activation/models/IActivate";
import { PerceptronService } from "../../../../src/perceptron/services/PerceptronService";

const successScenario = (
    iActivate: IActivate,
    weights: number[], 
    inputFeatures: number[],
) => {
    const perceptronService = new PerceptronService(iActivate);
    
    perceptronService.setWeights(weights);

    const sum = perceptronService.compute(inputFeatures);
    const activate = perceptronService.evaluate(sum);

    return {
        sum,
        activate,
    }
}

export const TestNonZeroWeightAndInput = (iActivate: IActivate) => {
    const weight = 0.5;
    const inputFeature = 1;

    const result = successScenario(iActivate, [weight], [inputFeature]);

    expect(result.sum).toBe(0.5);
}

export const TestTwoNonZeroWeightsAndInputs = (iActivate: IActivate) => {
    const weights = [ 0.8, 0.4];
    const inputFeatures = [ 1, 0 ];

    const result = successScenario(iActivate, weights, inputFeatures);

    expect(result.sum).toBe(0.8);
    expect(result.activate).toBe(true);
};

