import { IProductCart } from '../../../types/cartItem';

//! типы для стейта
export interface IState {
   productsCart: IProductCart[],
}

/*----------------------------------------------*/

//! enum для названий экшенов
export enum cartActionTypes {
   ADD_PRODUCT = "ADD_PRODUCT",
   DELETE_PRODUCT = "DELETE_PRODUCT",
   CHANGE_COUNT = "CHANGE_COUNT"
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
   type: cartActionTypes.ADD_PRODUCT,
   payload: IAddCartPayload
}

interface IDeleteCartAction {
   type: cartActionTypes.DELETE_PRODUCT,
   payload: IDeleteCartPayload
}

interface IChangeCountCartAction {
   type: cartActionTypes.CHANGE_COUNT,
   payload: IChangeCountCartPayload
}

//! общий тип для экшенов, чтобы экспортировать в одном значении
export type CartActions =
   IAddCartAction |
   IDeleteCartAction |
   IChangeCountCartAction