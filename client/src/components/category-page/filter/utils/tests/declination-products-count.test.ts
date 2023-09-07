import { declinationProductCount } from '../declination-products-count';

describe('declinationProductCount', () => {
    it('should return correct result for 1 item', () => {
        expect(declinationProductCount(1)).toBe('1 item found');
    });

    it('should return correct result for 2 items', () => {
        expect(declinationProductCount(2)).toBe('2 items found');
    });
});
