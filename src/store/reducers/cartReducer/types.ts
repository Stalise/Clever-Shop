import { IProductCart } from '../../../types/cartItem';

//! типы для стейта
export interface IState {
   productsCart: IProductCart[],
}

/*----------------------------------------------*/

//! enum для названий экшенов
export enum cartActionTypes {
   ADD_PRODUCT_CART = "ADD_PRODUCT_CART",
   DELETE_PRODUCT_CART = "DELETE_PRODUCT_CART",
   CHANGE_COUNT_CART = "CHANGE_COUNT_CART"
}

//! типизация payload 
interface IAddCartPayload {
   product: IProductCart,
}

interface IDeleteCartPayload {
   id: string,
}

interface IChangeCountCartPayload {
   product: IProductCart,
}

//! типы для экшенов
interface IAddCartAction {
   type: cartActionTypes.ADD_PRODUCT_CART,
   payload: IAddCartPayload
}

interface IDeleteCartAction {
   type: cartActionTypes.DELETE_PRODUCT_CART,
   payload: IDeleteCartPayload
}

interface IChangeCountCartAction {
   type: cartActionTypes.CHANGE_COUNT_CART,
   payload: IChangeCountCartPayload
}

//! общий тип для экшенов, чтобы экспортировать в одном значении
export type CartActions =
   IAddCartAction |
   IDeleteCartAction |
   IChangeCountCartAction