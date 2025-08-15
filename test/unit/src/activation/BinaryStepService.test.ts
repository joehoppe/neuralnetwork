import { BinaryStepService } from '../../../../src/activation/services/BinaryStepService';

describe('BinaryStepService', () => {
  describe('constructor', () => {
    it('should use default threshold of 0', () => {
      const service = new BinaryStepService();
      expect(service.activate(0)).toBe(0);
      expect(service.activate(0.1)).toBe(1);
    });

    it('should custom threshold when provided', () => {
      const service = new BinaryStepService(0.5);
      expect(service.activate(0.5)).toBe(0);
      expect(service.activate(0.6)).toBe(1);
    });
  });

  describe('activate', () => {
    it('should return 0 when input equals threshold', () => {
      const service = new BinaryStepService(0.5);
      expect(service.activate(0.5)).toBe(0);
    });

    it('should return 0 when input is less than threshold', () => {
      const service = new BinaryStepService(0.5);
      expect(service.activate(0.4)).toBe(0);
    });

    it('should return 1 when input is greater than threshold', () => {
      const service = new BinaryStepService(0.5);
      expect(service.activate(0.6)).toBe(1);
    });
  });
});
