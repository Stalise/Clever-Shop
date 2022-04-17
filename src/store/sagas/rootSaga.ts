import { call, spawn, all } from "redux-saga/effects";
import { watcherProducts, watcherProduct } from './productsSaga/watchers';
import { watcherCountries, watcherAdress, watcherOrder } from './cartSaga/watchers';

export default function* rootSaga(): any {

   const sagas = [watcherProducts, watcherProduct, watcherCountries, watcherAdress, watcherOrder]

   const retrySagas: any[] = yield sagas.map((saga, index) => {
      // если сага возвращает ошибку, то её вызывает заново.
      return spawn(function* () {
         while (true) {
            try {
               yield call(saga)
               break;
               // если в catch не сделать break/исправить вызов саги, то может быть бесконечный цикл вызова
            } catch (e) {
               break;
            }
         }
      })
   })

   // вызывает каждую сагу из retrySagas как в цикле.
   yield all(retrySagas)
}