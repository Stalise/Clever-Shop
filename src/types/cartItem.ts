//! продукт который находится в корзине
export interface IProductCart {
   category: string,
   idCart: string,
   img: string,
   name: string,
   color: string,
   size: string,
   price: number,
   count: number,
   totalPrice: number,
}
