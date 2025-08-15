import { LayerService } from '../../../../src/layer/services/LayerService';
import { PerceptronService } from '../../../../src/perceptron/services/PerceptronService';
import { BinaryStepService } from '../../../../src/activation/services/BinaryStepService';

describe('LayerService', () => {
  let layerService: LayerService;
  let mockPerceptron1: PerceptronService;
  let mockPerceptron2: PerceptronService;

  beforeEach(() => {
    const activation = new BinaryStepService(0.5);
    mockPerceptron1 = new PerceptronService(activation);
    mockPerceptron2 = new PerceptronService(activation);
    mockPerceptron1.setWeights([0.8, 0.4]);
    mockPerceptron2.setWeights([0.6, 0.2]);
  });

  describe('constructor', () => {
    it('should initialize with provided nodes', () => {
      layerService = new LayerService([mockPerceptron1, mockPerceptron2]);
      const result = layerService.predict([1, 0]);
      expect(result).toEqual([1, 1]);
    });
  });

  describe('addNode', () => {
    it('should add a node to the layer', () => {
      layerService = new LayerService();
      layerService.addNode(mockPerceptron1);
      const result = layerService.predict([1, 0]);
      expect(result).toEqual([1]);
    });
  });

  describe('predict', () => {
    it('should return predictions from all nodes', () => {
      layerService = new LayerService([mockPerceptron1, mockPerceptron2]);
      const result = layerService.predict([1, 0]);
      expect(result).toEqual([1, 1]);
    });

    it('should handle multiple nodes with different outputs', () => {
      const activation = new BinaryStepService(0.5);
      const perceptron3 = new PerceptronService(activation);
      perceptron3.setWeights([0.1, 0.1]);

      layerService = new LayerService([mockPerceptron1, perceptron3]);
      const result = layerService.predict([1, 0]);
      expect(result).toEqual([1, 0]);
    });
  });
});
