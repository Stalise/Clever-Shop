import { IProductsItem } from '../types/productsItem';
import { sortedActionTypes } from '../store/reducers/sortedReducer/types';

export const changeProductsAction = (products: IProductsItem[], category: string) => {
   return { type: sortedActionTypes.CHANGE_PRODUCTS, payload: { products, category } }
};

export const changeTabAction = (tab: string, category: string) => {
   return { type: sortedActionTypes.CHANGE_TAB, payload: { tab, category } }
};

export const changeParamsAction = (params: string[], category: string, type: string) => {
   return { type: sortedActionTypes.CHANGE_PARAMS, payload: { params, category, type } }
};

export const clearSortedAction = (category: string) => {
   return { type: sortedActionTypes.CLEAR_SORTED, payload: { category } }
};