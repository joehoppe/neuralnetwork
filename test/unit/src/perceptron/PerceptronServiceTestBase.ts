import { ActivationTypeEnum } from "../../../../src/activation/models/ActivationTypeEnum";
import { PerceptronInput } from "../../../../src/perceptron/models/PerceptronInput";
import { PerceptronWeightType } from "../../../../src/perceptron/models/PerceptronWeightType";
import { PerceptronService } from "../../../../src/perceptron/services/PerceptronService";

const successScenario = (
    threshold: number,
    weightTypes: PerceptronWeightType[], 
    inputs: PerceptronInput[],
    activationType: ActivationTypeEnum,
) => {
    const perceptronService = new PerceptronService(activationType);

    weightTypes.forEach((weightType) => {
        perceptronService.addWeightType(weightType);
    });

    const sum = perceptronService.compute(inputs);
    const activate = perceptronService.evaluate(threshold,sum);

    return {
        sum,
        activate,
    }
}

export const TestNonZeroWeightAndInput = (activationType: ActivationTypeEnum) => {
    const weightIdentifier = 'weightId1';

    const weightType1: PerceptronWeightType = {
        weight: 0.5,
        identifier: weightIdentifier,
    };

    const inputs: PerceptronInput[] = [{
        input: 1,
        identifier: weightIdentifier,
    }]

    const result = successScenario(0.1, [weightType1], inputs, activationType);

    expect(result.sum).toBe(0.5);
}

export const TestTwoNonZeroWeightsAndInputs = (activationType: ActivationTypeEnum) => {
    const weightIdentifier1 = 'weightId1';
    const weightIdentifier2 = 'weightId2';

    const weightType1: PerceptronWeightType = {
        weight: 0.8,
        identifier: weightIdentifier1,
    };
    const weightType2: PerceptronWeightType = {
        weight: 0.4,
        identifier: weightIdentifier2,
    };
    
    const inputs: PerceptronInput[] = [{
        input: 1,
        identifier: weightIdentifier1,
    },
    {
        input: 0,
        identifier: weightIdentifier2,
    }];

    const result = successScenario(0.1, [weightType1, weightType2], inputs, activationType);

    expect(result.sum).toBe(0.8);
    expect(result.activate).toBe(true);
};

