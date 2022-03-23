import { call, spawn, all } from "redux-saga/effects";
import { watcherProducts, watcherProduct } from './productsSaga/productsSaga';

export default function* rootSaga(): any {

   const sagas = [watcherProducts, watcherProduct]

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