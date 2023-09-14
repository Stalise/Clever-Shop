import { FiltersType } from 'types/filter';

import { checkSelectedFilters } from '../check-selected-filters';

describe('checkSelectedFilters', () => {
    it('should return false if filters not selected', () => {
        const filters: FiltersType = {
            color: [],
            size: [],
            brand: [],
            price: [],
            particular: [],
        };

        expect(checkSelectedFilters(filters)).toBeFalsy();
    });

    it('should return true if filters selected', () => {
        const filters: FiltersType = {
            color: [],
            size: [],
            brand: ['Nike'],
            price: [],
            particular: [],
        };

        expect(checkSelectedFilters(filters)).toBeTruthy();
    });
});
