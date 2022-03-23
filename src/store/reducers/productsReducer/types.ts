import { IProductsItem } from "../../../types/productsItem";

//! типы для стейта
export interface IState {
   products: IProducts,
   isLoading: boolean,
   isError: boolean,
}

export interface IProducts {
   men: IProductsItem[],
   women: IProductsItem[]
}

/*--------------------------------------------------------------*/

//! enum для названий экшенов
export enum productsActionTypes {
   ADD_PRODUCTS = "ADD_PRODUCTS",
   ADD_PRODUCT = "ADD_PRODUCT",
   CHANGE_LOADING = "CHANGE_LOADING",
   CHANGE_ERROR = "CHANGE_ERROR"
}

//! типизация payload 
interface IAddProductsPayload {
   products: IProducts,
   loadingStatus: boolean,
}

interface IAddProductPayload {
   product: IProductsItem,
   category: string,
   loadingStatus: boolean,
}

interface IChangeLoadingPayload {
   loadingStatus: boolean,
}

interface IChangeErrorPayload {
   errorStatus: boolean,
   loadingStatus: boolean,
}

//! типы для экшенов
interface IAddProductsAction {
   type: productsActionTypes.ADD_PRODUCTS,
   payload: IAddProductsPayload
}

interface IAddProductAction {
   type: productsActionTypes.ADD_PRODUCT,
   payload: IAddProductPayload
}

interface IChangeLoadingAction {
   type: productsActionTypes.CHANGE_LOADING,
   payload: IChangeLoadingPayload
}

interface IChangeErrorAction {
   type: productsActionTypes.CHANGE_ERROR,
   payload: IChangeErrorPayload
}

//! общий тип для экшенов, чтобы экспортировать в одном значении
export type CartActions =
   IAddProductsAction |
   IAddProductAction |
   IChangeLoadingAction |
   IChangeErrorAction