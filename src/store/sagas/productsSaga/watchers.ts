import { takeEvery } from "redux-saga/effects";

import { workerProducts, workerProductMiddleware } from './workers';
import { sagasConstants } from '../../../constants/saga';

export function* watcherProducts() {
   yield takeEvery(sagasConstants.REQUEST_PRODUCTS_SAGA, workerProducts)
}

export function* watcherProduct() {
   yield takeEvery(sagasConstants.REQUEST_PRODUCT_SAGA, workerProductMiddleware)
}