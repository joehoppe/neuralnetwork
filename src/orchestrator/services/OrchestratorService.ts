import { LayerService } from '../../layer/services/LayerService';
import { LogLevelEnum } from '../../logger/Models/LogLevelEnum';
import { LoggerService } from '../../logger/Services/LoggerService';

export class OrchestratorService {
  #logger: LoggerService;

  constructor(
    private layers: LayerService[],
    logLevel: LogLevelEnum = LogLevelEnum.WARN,
  ) {
    this.#logger = LoggerService.getInstance(logLevel);
  }

  predict(inputFeatures: number[]) {
    let layerPrediction = inputFeatures;

    if (this.layers.length === 0) {
      throw new Error('Orchestrator must have at least one layer');
    }

    for (const layer of this.layers) {
      this.#logger.debug('Executing prediction for layer', layer);
      layerPrediction = layer.predict(layerPrediction);
      this.#logger.debug('Prediction Result', layerPrediction);
    }
    return layerPrediction;
  }
}
