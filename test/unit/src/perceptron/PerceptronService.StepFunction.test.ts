import { TestNonZeroWeightAndInput, TestTwoNonZeroWeightsAndInputs } from "./PerceptronServiceTestBase"
import { BinaryStepService } from "../../../../src/activation/services/BinaryStepService";

describe('The perceptron service', () => {
    const binaryStepService = new BinaryStepService(0.1);

    it('should be able to compute a non-zero weight and a non-zero input', () => {
        TestNonZeroWeightAndInput(binaryStepService);
    });

    it('should be able to compute two non-zero weight and two non-zero input', () => {
        TestTwoNonZeroWeightsAndInputs(binaryStepService);
    });
});

