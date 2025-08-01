import { Layer } from '../../layer/services/LayerService';

export class OrchestratorService {
  constructor(private layers: Layer[]) {}

  predict(inputFeatures: []) {
    let predictions: number[] = [];
    this.layers.forEach((layer) => {
      predictions = layer.predict(inputFeatures);
    });

    return predictions;
  };
}
