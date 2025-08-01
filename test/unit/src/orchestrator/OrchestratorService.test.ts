import { IActivate } from "../../../../src/activation/models/IActivate";
import { BinaryStepService } from "../../../../src/activation/services/BinaryStepService";
import { LinearService } from "../../../../src/activation/services/LinearService";
import { PerceptronService } from "../../../../src/perceptron/services/PerceptronService";

describe('x', () => {
    const binaryStepService = new BinaryStepService(0.1);
    const linearService = new LinearService();

    const TestNonZeroWeightAndInput = (iActivate: IActivate) => {
                const perceptronService = new PerceptronService(iActivate);

        perceptronService.setWeights(weights);

        return perceptronService.predict(inputFeatures);

        
        const weight = 0.5;
        const inputFeature = 1;

        const isActivated = baseTest(iActivate, [weight], [inputFeature]);
        expect(isActivated).toBe(1);
        };

        const TestTwoNonZeroWeightsAndInputs = (iActivate: IActivate) => {
        const weights = [0.8, 0.4];
        const inputFeatures = [1, 0];

        const isActivated = baseTest(iActivate, weights, inputFeatures);

        expect(isActivated).toBe(1);
    };

    it('should be able to compute a non-zero weight and a non-zero input', () => {
        TestNonZeroWeightAndInput(binaryStepService);
    });

    it('should be able to compute two non-zero weight and two non-zero input', () => {
        TestTwoNonZeroWeightsAndInputs(binaryStepService);
    });
});

