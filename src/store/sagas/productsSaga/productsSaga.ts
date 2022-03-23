import { call, put, takeEvery, spawn } from "redux-saga/effects";

import { IProductsItem } from '../../../types/productsItem';
import { actionTypes } from './constants';
import { productsRequests } from "../../../api/api";
import { IProducts } from '../../reducers/productsReducer/types';
import { addProductstAction, addProductAction, changeLoadingAction, changeErrorAction } from '../../reducers/productsReducer/actions';

function* workerProducts(): any {
   try {
      yield put(changeLoadingAction(false))

      const products: IProducts = yield call<any>(productsRequests.getProducts)

      yield put(addProductstAction(products, true))
   } catch (error) {
      console.log(error)
      yield put(changeErrorAction(true, true))
   }
}

function* workerProduct(data: any): any {
   try {
      yield put(changeLoadingAction(false))

      const product: IProductsItem = yield call<any>(productsRequests.getProduct, data.id)

      yield put(addProductAction(product, product.category, true))
   } catch (error) {
      console.log(error)
   }
}

// сначала гружу один продукт, но если он вызывал ошибку, я все равно загружу все товары
function* workerProductMiddleware(data: any) {
   yield spawn(workerProduct, data)
   yield spawn(workerProducts)
}

export function* watcherProducts() {
   yield takeEvery(actionTypes.REQUEST_PRODUCTS, workerProducts)
}

export function* watcherProduct() {
   yield takeEvery(actionTypes.REQUEST_PRODUCT, workerProductMiddleware)
}