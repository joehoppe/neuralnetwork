import { IActivate } from "../../../../src/activation/models/IActivate";
import { InputFeature } from "../../../../src/perceptron/models/InputFeature";
import { Weight } from "../../../../src/perceptron/models/Weight";
import { PerceptronService } from "../../../../src/perceptron/services/PerceptronService";

const successScenario = (
    iActivate: IActivate,
    weightTypes: Weight[], 
    inputs: InputFeature[],
) => {
    const perceptronService = new PerceptronService(iActivate);

    weightTypes.forEach((weightType) => {
        perceptronService.addWeightType(weightType);
    });

    const sum = perceptronService.compute(inputs);
    const activate = perceptronService.evaluate(sum);

    return {
        sum,
        activate,
    }
}

export const TestNonZeroWeightAndInput = (iActivate: IActivate) => {
    const weightIdentifier = 'weightId1';

    const weightType1: Weight = {
        value: 0.5,
        identifier: weightIdentifier,
    };

    const inputs: InputFeature[] = [{
        input: 1,
        identifier: weightIdentifier,
    }]

    const result = successScenario(iActivate, [weightType1], inputs);

    expect(result.sum).toBe(0.5);
}

export const TestTwoNonZeroWeightsAndInputs = (iActivate: IActivate) => {
    const weightIdentifier1 = 'weightId1';
    const weightIdentifier2 = 'weightId2';

    const weightType1: Weight = {
        value: 0.8,
        identifier: weightIdentifier1,
    };
    const weightType2: Weight = {
        value: 0.4,
        identifier: weightIdentifier2,
    };
    
    const inputs: InputFeature[] = [{
        input: 1,
        identifier: weightIdentifier1,
    },
    {
        input: 0,
        identifier: weightIdentifier2,
    }];

    const result = successScenario(iActivate, [weightType1, weightType2], inputs);

    expect(result.sum).toBe(0.8);
    expect(result.activate).toBe(true);
};

