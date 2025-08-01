import { IActivate } from '../../../../src/activation/models/IActivate';
import { PerceptronService } from '../../../../src/perceptron/services/PerceptronService';

const baseTest = (
  iActivate: IActivate,
  weights: number[],
  inputFeatures: number[],
) => {
  const perceptronService = new PerceptronService(iActivate);

  perceptronService.setWeights(weights);

  return perceptronService.predict(inputFeatures);
};

export const TestNonZeroWeightAndInput = (iActivate: IActivate) => {
  const weight = 0.5;
  const inputFeature = 1;

  const isActivated = baseTest(iActivate, [weight], [inputFeature]);
  expect(isActivated).toBe(1);
};

export const TestTwoNonZeroWeightsAndInputs = (iActivate: IActivate) => {
  const weights = [0.8, 0.4];
  const inputFeatures = [1, 0];

  const isActivated = baseTest(iActivate, weights, inputFeatures);

  expect(isActivated).toBe(1);
};
