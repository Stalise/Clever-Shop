import { IProductsItem } from '../../../types/productsItem';

//! типы для стейта
interface ICategory {
   productsSorted: IProductsItem[],
   tab: string,
   color: string[],
   size: string[],
   brand: string[],
   price: string[],
}

export interface IState {
   men: ICategory,
   women: ICategory,
}

/*----------------------------------------------*/

//! enum для названий экшенов
export enum sortedActionTypes {
   CHANGE_PRODUCTS = "CHANGE_PRODUCTS",
   CHANGE_TAB = "CHANGE_TAB",
   CHANGE_PARAMS = "CHANGE_PARAMS",
   CLEAR_SORTED = "CLEAR_SORTED",
}

//! типизация payload 
interface ISortedProductsPayload {
   products: IProductsItem[],
   category: string,
}

interface ISortedTabPayload {
   tab: string,
   category: string,
}

interface ISortedParamsPayload {
   params: string[],
   category: string,
   type: string
}

interface IClearSortedPayload {
   category: string,
}

//! типы для экшенов
interface ISortedProductsAction {
   type: sortedActionTypes.CHANGE_PRODUCTS,
   payload: ISortedProductsPayload
}

interface ISortedTabAction {
   type: sortedActionTypes.CHANGE_TAB,
   payload: ISortedTabPayload,
}

interface ISortedParamsAction {
   type: sortedActionTypes.CHANGE_PARAMS,
   payload: ISortedParamsPayload,
}

interface IClearSortedAction {
   type: sortedActionTypes.CLEAR_SORTED,
   payload: IClearSortedPayload
}

//! общий тип для экшенов, чтобы экспортировать в одном значении
export type SortedActions =
   ISortedProductsAction |
   ISortedTabAction |
   ISortedParamsAction |
   IClearSortedAction
