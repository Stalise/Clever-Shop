import { call, put, spawn } from "redux-saga/effects";

import { addProductstAction, addProductAction, changeLoadingAction, changeErrorAction } from '../../../actions/productsReducer';
import { IProductsItem } from '../../../types/productsItem';
import { productsRequests } from "../../../api/api";
import { IProducts } from '../../reducers/productsReducer/types';

export function* workerProducts(): any {
   try {
      yield put(changeLoadingAction(false))

      const products: IProducts = yield call<any>(productsRequests.getProducts)

      yield put(addProductstAction(products, true))
   } catch (error) {
      console.log(error)
      yield put(changeErrorAction(true, true))
   }
}

export function* workerProduct(data: any): any {
   try {
      yield put(changeLoadingAction(false))

      const product: IProductsItem = yield call<any>(productsRequests.getProduct, data.id)

      yield put(addProductAction(product, product.category, true))
   } catch (error) {
      console.log(error)
   }
}

// сначала гружу один продукт, но если он вызывал ошибку, я все равно загружу все товары
export function* workerProductMiddleware(data: any) {
   yield spawn(workerProduct, data)
   yield spawn(workerProducts)
}