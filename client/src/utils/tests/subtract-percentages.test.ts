import { subtractPercentages } from '../subtract-percentages';

describe('subtractPercentages', () => {
    const amount = 100;

    it('should return correct result for 20 percentages', () => {
        expect(subtractPercentages(amount, 20)).toBe(80);
    });

    it('should return correct result for 0 percentages', () => {
        expect(subtractPercentages(amount, 0)).toBe(amount);
    });
});
