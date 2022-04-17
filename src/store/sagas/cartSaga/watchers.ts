import { takeEvery } from "redux-saga/effects";

import { workerCountries, workerAdress, workerOrder } from './workers';
import { sagasConstants } from '../../../constants/saga';

export function* watcherCountries() {
   yield takeEvery(sagasConstants.REQUEST_COUNTRIES_SAGA, workerCountries)
}

export function* watcherAdress() {
   yield takeEvery(sagasConstants.REQUEST_ADRESS_SAGA, workerAdress)
}

export function* watcherOrder() {
   yield takeEvery(sagasConstants.REQUEST_ORDER_SAGA, workerOrder)
}