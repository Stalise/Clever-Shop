export interface IProduct {
    id: number;
    name: string;
    brand: string;
    category: CategoriesType;
    rating: number;
    price: number;
    discount: null | number;
    material: string[];
    sizes: string[];
    colors: string[];
    images: IImage[];
    reviews: IReview[];
}

export interface IImage {
    id: number;
    color: string;
    url: string;
}

export interface IReview {
    id: number;
    name: string;
    text: string;
    rating: number;
}

export type CategoriesType = 'men' | 'women';