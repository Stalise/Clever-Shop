import { FilterGroupType } from 'types/filter';

interface IMock {
    group: FilterGroupType;
    items: string[];
}

export const colors: IMock = {
    group: 'color',
    items: [
        'Gray',
        'Grey',
        'White',
        'Turquoise',
        'Black',
        'Yellow',
        'Blue',
        'Beige',
        'Pink',
        'Light blue',
        'Brown',
        'Purple',
        'Orange',
        'Khaki',
    ],
};

export const sizes: IMock = {
    group: 'size',
    items: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
};

export const brands: IMock = {
    group: 'brand',
    items: [
        'Nike',
        'Carhartt',
        'Reebok',
        'H&M',
        'Zara',
        'Uniqlo',
        'Mango',
        'COS',
        'Champion',
        'Tommy Hilfiger',
        'Bershka',
        'Morato',
        'Pull&Bear',
        'Adidas',
    ],
};

export const prices: IMock = {
    group: 'price',
    items: ['$150+', '$120-150$', '$60-$120', '$0-$60'],
};

export const particulars: IMock = {
    group: 'particular',
    items: [
        'new arrivals',
        'specials',
        'bestsellers',
        'most viewed',
        'featured products',
    ],
};
