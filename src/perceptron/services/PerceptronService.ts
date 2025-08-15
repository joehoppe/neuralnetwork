import { IActivate } from '../../activation/models/IActivate';
import { LoggerService } from '../../logger/Services/LoggerService';

export class PerceptronService {
  #weights: number[];
  #logger: LoggerService = LoggerService.getInstance();

  /* With the exception of the output layer, all layers typically use the same activation function
    But the output layer can use a different one, such as softmax for classification tasks 
  */
  constructor(
    public activationService: IActivate,
    inputSize = 0,
    // todo: implement bias when not using threshold
    // private bias: number = 0,
  ) {
    this.#weights =
      inputSize > 0
        ? Array(inputSize)
            .fill(0)
            .map(() => Math.random() * 2 - 1)
        : [];
  }

  setWeights(weights: number[]): void {
    this.#weights = weights;
  }

  getWeights(): number[] {
    return [...this.#weights];
  }

  predict(inputFeatures: number[]): number {
    if (this.#weights.length === 0) {
      throw new Error('Weights not set or initialized');
    }

    if (inputFeatures.length !== this.#weights.length) {
      throw new Error(
        `Input features length (${inputFeatures.length}) does not match weights length (${this.#weights.length})`,
      );
    }

    const dotProduct = this.dotProduct(inputFeatures, this.#weights);

    this.#logger.debug(
      `Dot product: ${dotProduct}, weights: ${this.#weights}, inputFeatures: ${inputFeatures}`,
    );

    return this.activationService.activate(dotProduct);
  }

  // todo: Move to injectable interface IDotProduct
  private dotProduct(a: number[], b: number[]): number {
    if (a.length !== b.length) {
      throw new Error('Vectors must have the same length');
    }

    return a.reduce((sum, val, i) => sum + val * b[i], 0);
  }
}
