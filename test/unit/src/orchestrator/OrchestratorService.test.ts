import { OrchestratorService } from '../../../../src/orchestrator/services/OrchestratorService';
import { LayerService } from '../../../../src/layer/services/LayerService';
import { PerceptronService } from '../../../../src/perceptron/services/PerceptronService';
import { BinaryStepService } from '../../../../src/activation/services/BinaryStepService';
import { LogLevelEnum } from '../../../../src/logger/Models/LogLevelEnum';

describe('OrchestratorService', () => {
  let orchestrator: OrchestratorService;
  let layer1: LayerService;
  let layer2: LayerService;

  beforeEach(() => {
    const activation = new BinaryStepService(0.5);

    const perceptron1 = new PerceptronService(activation);
    perceptron1.setWeights([0.8, 0.4]);

    const perceptron2 = new PerceptronService(activation);
    perceptron2.setWeights([0.6, 0.2]);

    layer1 = new LayerService([perceptron1, perceptron2]);
    layer2 = new LayerService([perceptron1]);
  });

  describe('constructor', () => {
    it('should initialize with default log level WARN', () => {
      orchestrator = new OrchestratorService([layer1]);
      expect(orchestrator).toBeDefined();
    });

    it('should initialize with custom log level', () => {
      orchestrator = new OrchestratorService([layer1], LogLevelEnum.DEBUG);
      expect(orchestrator).toBeDefined();
    });
  });

  describe('predict', () => {
    it('should process input through single layer', () => {
      orchestrator = new OrchestratorService([layer1]);
      const result = orchestrator.predict([1, 0]);
      expect(result).toEqual([1, 1]);
    });

    it('should process input through multiple layers', () => {
      orchestrator = new OrchestratorService([layer1, layer2]);
      const result = orchestrator.predict([1, 0]);
      expect(result).toEqual([1]);
    });

    it('should throw an error if the orchestrator does not have any layers', () => {
      orchestrator = new OrchestratorService([]);
      expect(() => orchestrator.predict([1, 0])).toThrow(
        'Orchestrator must have at least one layer',
      );
    });
  });
});
