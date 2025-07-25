import { PerceptronService } from '../../perceptron/services/PerceptronService';

export class Layer {
  #nodes: PerceptronService[] = [];

  addNode(node: PerceptronService) {
    this.#nodes.push(node);
  }

  predict(inputFeature: [], activatedNodes?: []) {
    const allActivated = activatedNodes === undefined;

    // For each node, execute predict
    // Return array to indicate which activated
    return this.#nodes.reduce((predictions: any, currentPerceptron, index) => {
      if (allActivated || activatedNodes[index]) {
        const currentPrediction = currentPerceptron.predict(
          inputFeature[index],
        );
        predictions.push(currentPrediction);
      } else {
        predictions.push(0);
      }
    }, [] as number[]);
  }
}
