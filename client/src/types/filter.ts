export type FilterGroupType =
    | 'color'
    | 'size'
    | 'brand'
    | 'price'
    | 'particular';

export type FiltersType = {
    [key in FilterGroupType]: string[];
};

export type handleFiltersChangeType = (
    group: FilterGroupType,
    text: string,
    isChecked: boolean,
) => void;
