import { PerceptronService } from '../../perceptron/services/PerceptronService';

export class Layer {
  #nodes: PerceptronService[] = [];

  addNode(node: PerceptronService) {
    this.#nodes.push(node);
  }

  predict(inputFeature: []): number[] {
    // For each node, execute predict
    // Return result of activation functions to feedforward
    return this.#nodes.reduce((predictions: any, currentPerceptron, index) => {
        const currentPrediction = currentPerceptron.predict(
          inputFeature[index],
        );
        predictions.push(currentPrediction);
    }, [] as number[]);
  }
}
