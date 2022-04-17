import { call, put, select } from "redux-saga/effects";
import { requestDeliveryCountriesCartAction, requestDeliveryAdressCartAction, setErrorAction } from '../../../actions/cartReducer';

import { cartRequests } from '../../../api/api';

export function* workerCountries(): any {
   try {
      const countries = yield call<any>(cartRequests.getCountries)

      yield put(requestDeliveryCountriesCartAction(countries))
   } catch (error) {
      console.log(error)
   }
}

export function* workerAdress(data: any): any {
   try {
      const { validateDelivery } = yield select((store) => store.cart);

      const adresses = yield call<any>(cartRequests.getAdress, { country: validateDelivery.shopCountry, adress: data.value })

      console.log(adresses)
      yield put(requestDeliveryAdressCartAction(adresses))
   } catch (error) {
      console.log(error)
   }
}


export function* workerOrder(data: any): any {
   try {
      const response: string = yield call<any>(cartRequests.sendOrder, data.order)

      yield put(setErrorAction(response))
   } catch (error) {
      console.log('errrrrrrr')
   }
}