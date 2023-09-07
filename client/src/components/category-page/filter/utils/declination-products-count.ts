import pluralize from 'pluralize';

export const declinationProductCount = (products: number): string => {
    const result = pluralize('item', products, true);

    return `${result} found`;
};
