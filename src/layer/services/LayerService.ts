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

    // For each node, execute predict
    // Return result of activation functions to feedforward
    return this.#nodes.map(perceptron => {
      const prediction = perceptron.predict(inputFeatures);
      this.#logger.debug(`Prediction Result`, perceptron);
      return prediction;
    });
  }
}
