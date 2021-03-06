import { KeyType } from "./keyType";

//! product который приходит с запроса от сервера
export interface IProductsItem {
   particulars: IProductsParticulars,
   name: string,
   category: string,
   brand: string,
   material: string,
   rating: number,
   price: number,
   sizes: string[],
   discount: string | null,
   reviews: IProductsReview[],
   images: IProductsImage[],
   id: string,
}

interface IProductsParticulars extends KeyType<boolean> {
   isNewArrivals: boolean,
   isSpecial: boolean,
   isBestseller: boolean,
   isMostViewed: boolean,
   isFeatured: boolean,
}

interface IProductsReview {
   name: string,
   text: string,
   rating: number,
   id: string
}

interface IProductsImage {
   color: string,
   url: string,
   id: string
}