import { PerceptronInput } from "../../../../src/perceptron/models/PerceptronInput";
import { PerceptronWeightType } from "../../../../src/perceptron/models/PerceptronWeightType";
import { PerceptronService } from "../../../../src/perceptron/services/PerceptronService";

describe('The perceptron service', () => {
    const successScenario = (
        threshold: number,
        weightTypes: PerceptronWeightType[], 
        inputs: PerceptronInput[],
    ) => {
        const perceptronService = new PerceptronService();

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

    it('should be able to compute a non-zero weight and a non-zero input', () => {
        const weightIdentifier = 'weightId1';

        const weightType1: PerceptronWeightType = {
            weight: 0.5,
            identifier: weightIdentifier,
        };

        const inputs: PerceptronInput[] = [{
            input: 1,
            identifier: weightIdentifier,
        }]

        const result = successScenario(0.1, [weightType1], inputs);

        expect(result.sum).toBe(0.5);
    });

    it('should be able to compute two non-zero weight and two non-zero input', () => {
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

        const result = successScenario(0.1, [weightType1, weightType2], inputs);

        expect(result.sum).toBe(0.8);
        expect(result.activate).toBe(true);
    });
});

