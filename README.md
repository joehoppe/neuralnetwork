# Neural Network

A TypeScript implementation of a basic neural network using perceptrons with configurable activation functions.

## Architecture

- **PerceptronService**: Individual neuron with weighted inputs and activation function
- **LayerService**: Collection of perceptrons forming a network layer
- **OrchestratorService**: Manages multiple layers for forward propagation
- **Activation Functions**: Binary Step and Linear activation implementations

## Installation

```bash
npm install
```

## Usage

```typescript
import { PerceptronService } from './src/perceptron/services/PerceptronService';
import { BinaryStepService } from './src/activation/services/BinaryStepService';

const activation = new BinaryStepService(0.5);
const perceptron = new PerceptronService(activation);
perceptron.setWeights([0.8, 0.4]);
const result = perceptron.predict([1, 0]);
```

## Development

```bash
npm run test          # Run tests
npm run test-coverage # Run tests with coverage
npm run lint          # Lint code
npm run format        # Format code
```
