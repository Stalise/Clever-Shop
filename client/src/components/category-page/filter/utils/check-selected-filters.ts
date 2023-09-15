import { FiltersType } from 'types/filter';

export const checkSelectedFilters = (filters: FiltersType): boolean => {
    let isFilterExist = false;

    for (const list of Object.values(filters)) {
        if (list.length) {
            isFilterExist = true;
            break;
        }
    }

    return isFilterExist;
};
