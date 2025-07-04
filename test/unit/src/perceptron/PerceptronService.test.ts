import { ActivationTypeEnum } from "../../../../src/activation/models/ActivationTypeEnum";
import { TestNonZeroWeightAndInput, TestTwoNonZeroWeightsAndInputs } from "./PerceptronServiceTestBase"

const TEST_CONSTANTS = {
    activationType: ActivationTypeEnum.BinaryStep,
}

describe('The perceptron service', () => {
    it('should be able to compute a non-zero weight and a non-zero input', () => {
        TestNonZeroWeightAndInput(TEST_CONSTANTS.activationType);
    });

    it('should be able to compute two non-zero weight and two non-zero input', () => {
        TestTwoNonZeroWeightsAndInputs(TEST_CONSTANTS.activationType)
    });
});

