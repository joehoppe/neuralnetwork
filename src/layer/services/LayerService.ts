import { BinaryStepService } from '../../activation/services/BinaryStepService';
import { LoggerService } from '../../logger/Services/LoggerService';
import { PerceptronService } from '../../perceptron/services/PerceptronService';

export class LayerService {
  #nodes: PerceptronService[];
  #logger: LoggerService = LoggerService.getInstance();

  constructor(nodes?: PerceptronService[]) {
    this.#nodes = nodes ?? [];
  }

  addNode(node: PerceptronService) {
    this.#nodes.push(node);
  }

  predict(inputFeatures: number[]): number[] {
    if (this.#nodes.length === 0) {
      throw new Error('Layer must have at least one node');
    }

    return this.#nodes.map(perceptron => {
      const prediction = perceptron.predict(inputFeatures);
      this.#logger.debug(`Prediction Result`, perceptron);
      return prediction;
    });
  }

  /* Gradually adjusts weights so the network makes better predictions
      If an input contributed to a wrong prediction,
      its weight gets adjusted proportionally to reduce future errors
   */
  updateWeights(
    inputs: number[],
    rawErrors: number[], // How incorrect the prediction was for each node
    learningRate: number, // Positive - increase weights. Negative, decrease
  ): void {
    if (rawErrors.length !== inputs.length) {
      throw new Error('Number of errors must match number of inputs');
    }

    this.#nodes.forEach((node, nodeIndex) => {
      const currentWeights = node.getWeights();

      if (node.activationService instanceof BinaryStepService) {
        this.#logger.warn(
          'This formula might need to be adjusted from the raw error to the derivative of the loss function',
        );
      }

      const newWeights = currentWeights.map(
        // perceptron learning rule (delta rule):
        (weight, weightIndex) =>
          weight + learningRate * rawErrors[nodeIndex] * inputs[weightIndex],
      );
      node.setWeights(newWeights);
    });
  }
}
