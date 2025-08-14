import { IActivate } from '../../../../src/activation/models/IActivate';
import { BinaryStepService } from '../../../../src/activation/services/BinaryStepService';
import { PerceptronService } from '../../../../src/perceptron/services/PerceptronService';
import { OrchestratorService } from '../../../../src/orchestrator/services/OrchestratorService';
import { LayerService } from '../../../../src/layer/services/LayerService';

describe('The Orchestrator Service', () => {
  describe('when using a Binary Step Activation Function', () => {
    const binaryStepService = new BinaryStepService(0.1);

    const TestNonZeroWeightAndInput = (iActivate: IActivate) => {
      const perceptron = new PerceptronService(iActivate);
      const layer = new LayerService([perceptron]);
      const orchestrator = new OrchestratorService([layer]);
      const inputFeatures = [1];

      perceptron.setWeights([0.5]);

      const isActivated = orchestrator.predict(inputFeatures);
      expect(isActivated).toStrictEqual([1]);
    };

    const TestTwoNonZeroWeightsAndInputs = (iActivate: IActivate) => {
      const perceptronService = new PerceptronService(iActivate);
      perceptronService.setWeights([0.8, 0.4]);

      const inputFeatures = [1, 0];

      const isActivated = perceptronService.predict(inputFeatures);

      expect(isActivated).toBe(1);
    };

    it('should be able to compute a non-zero weight and a non-zero input', () => {
      TestNonZeroWeightAndInput(binaryStepService);
    });

    it('should be able to compute two non-zero weight and two non-zero input', () => {
      TestTwoNonZeroWeightsAndInputs(binaryStepService);
    });
  });

  // describe('when using a Linear Activation Function', () => {
  //   const linearService = new LinearService();

  //   const TestNonZeroWeightAndInput = (iActivate: IActivate) => {
  //     const perceptronService = new PerceptronService(iActivate);
  //     perceptronService.setWeights([0.5]);

  //     const inputFeature = [1];

  //     const isActivated = perceptronService.predict(inputFeature);
  //     expect(isActivated).toBe(0.5);
  //   };

  //   const TestTwoNonZeroWeightsAndInputs = (iActivate: IActivate) => {
  //     const perceptronService = new PerceptronService(iActivate);
  //     perceptronService.setWeights([0.8, 0.4]);

  //     const inputFeatures = [1, 0];

  //     const isActivated = perceptronService.predict(inputFeatures);

  //     expect(isActivated).toBe(0.8);
  //   };

  //   it('should be able to compute a non-zero weight and a non-zero input', () => {
  //     TestNonZeroWeightAndInput(linearService);
  //   });

  //   it('should be able to compute two non-zero weight and two non-zero input', () => {
  //     TestTwoNonZeroWeightsAndInputs(linearService);
  //   });
  // });

  // describe('when using a Binary Step Activation Function', () => {
  //   const binaryStepService = new BinaryStepService(0.1);

  //   const TestNonZeroWeightAndInput = (iActivate: IActivate) => {
  //     const perceptronService = new PerceptronService(iActivate);
  //     perceptronService.setWeights([0.5]);

  //     const inputFeature = [1];

  //     const isActivated = perceptronService.predict(inputFeature);
  //     expect(isActivated).toBe(1);
  //   };

  //   const TestTwoNonZeroWeightsAndInputs = (iActivate: IActivate) => {
  //     const perceptronService = new PerceptronService(iActivate);
  //     perceptronService.setWeights([0.8, 0.4]);

  //     const inputFeatures = [1, 0];

  //     const isActivated = perceptronService.predict(inputFeatures);

  //     expect(isActivated).toBe(1);
  //   };

  //   it('should be able to compute a non-zero weight and a non-zero input', () => {
  //     TestNonZeroWeightAndInput(binaryStepService);
  //   });

  //   it('should be able to compute two non-zero weight and two non-zero input', () => {
  //     TestTwoNonZeroWeightsAndInputs(binaryStepService);
  //   });
  // });

  // describe('with two layers and two activation functions', () => {
  //   const binaryStepService = new BinaryStepService();
  //   const linearService = new LinearService();

  //   const TestNonZeroWeightAndInput = (iActivate: IActivate) => {
  //     const perceptronService = new PerceptronService(iActivate);
  //     perceptronService.setWeights([0.5]);

  //     const inputFeature = [1];

  //     const isActivated = perceptronService.predict(inputFeature);
  //     expect(isActivated).toBe(0.5);
  //   };

  //   const TestTwoNonZeroWeightsAndInputs = (iActivate: IActivate) => {
  //     const perceptronService = new PerceptronService(iActivate);
  //     perceptronService.setWeights([0.8, 0.4]);

  //     const inputFeatures = [1, 0];

  //     const isActivated = perceptronService.predict(inputFeatures);

  //     expect(isActivated).toBe(0.8);
  //   };

  //   it('should be able to predict across two layers', () => {
  //     TestNonZeroWeightAndInput(linearService);
  //   });

  //   it('should be able to compute two non-zero weight and two non-zero input', () => {
  //     TestTwoNonZeroWeightsAndInputs(linearService);
  //   });
  // });
});
