import { declinationReviewsCount } from '../declination-reviews-count';

describe('declinationReviewsCount', () => {
    it('should return correct result for 1 review', () => {
        expect(declinationReviewsCount(1)).toBe('1 Review');
    });

    it('should return correct result for 2 reviews', () => {
        expect(declinationReviewsCount(2)).toBe('2 Reviews');
    });
});
