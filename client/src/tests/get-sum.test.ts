// For example !!!
import { getSum } from 'utils/get-sum';

describe('get-sum', () => {
    it('should return 10', () => {
        expect(getSum(3)).toBe(15);
    });

    it('should return 15', () => {
        expect(getSum(7)).toBe(12);
    });
});
