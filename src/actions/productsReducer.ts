import { IProductsItem } from '../types/productsItem';
import { IProducts, productsActionTypes } from '../store/reducers/productsReducer/types';

export const addProductstAction = (products: IProducts, loadingStatus: boolean) => {
   return { type: productsActionTypes.ADD_PRODUCTS, payload: { products, loadingStatus } }
}

export const addProductAction = (product: IProductsItem, category: string, loadingStatus: boolean) => {
   return { type: productsActionTypes.ADD_PRODUCT, payload: { product, category, loadingStatus } }
}

export const replaceProductsAction = (products: IProductsItem[], category: string) => {
   return { type: productsActionTypes.REPLACE_PRODUCTS, payload: { products, category } }
}

export const changeLoadingAction = (loadingStatus: boolean) => {
   return { type: productsActionTypes.CHANGE_LOADING, payload: { loadingStatus } }
}

export const changeErrorAction = (errorStatus: boolean, loadingStatus: boolean) => {
   return { type: productsActionTypes.CHANGE_ERROR, payload: { errorStatus, loadingStatus } }
}