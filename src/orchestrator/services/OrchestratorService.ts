import { Layer } from '../../layer/services/LayerService';

export class OrchestratorService {
  constructor(private layers: Layer[]) {}

  predict(inputFeatures: []) {
    let activatedNodes = undefined;
    for (const layer of this.layers) {
      activatedNodes = layer.predict(inputFeatures, activatedNodes);
    }
  }
}
