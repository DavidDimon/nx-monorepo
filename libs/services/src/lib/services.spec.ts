import { sum } from './services';

describe('services', () => {
  it('should sum 1 + 1', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
