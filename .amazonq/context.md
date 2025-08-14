# Neural Network Project Context

## Project Overview

TypeScript implementation of a basic neural network using perceptrons with configurable activation functions.

## Architecture

- **PerceptronService**: Individual neuron with weighted inputs and activation function
- **LayerService**: Collection of perceptrons forming a network layer
- **OrchestratorService**: Manages multiple layers for forward propagation
- **Activation Functions**: Binary Step and Linear activation implementations

## Key Technologies

- TypeScript
- Node.js
- Jest (testing)
- ESLint (linting)
- Prettier (formatting)

## Code Style Guidelines

- Use TypeScript interfaces for type definitions
- Follow service-oriented architecture pattern
- Implement dependency injection where appropriate
- Write unit tests for all services
- Use descriptive method and variable names

## Project Structure

```text
src/
├── perceptron/
│   └── services/
├── activation/
│   └── services/
├── layer/
│   └── services/
└── orchestrator/
    └── services/
```

## Development Commands

- `npm run test` - Run tests
- `npm run test-coverage` - Run tests with coverage
- `npm run lint` - Lint code
- `npm run format` - Format code
