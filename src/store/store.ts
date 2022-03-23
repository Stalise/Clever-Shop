import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';
import { sortedReducer } from "./reducers/sortedReducer/sortedReducer";
import { cartReducer } from "./reducers/cartReducer/cartReducer";
import { productsReducer } from "./reducers/productsReducer/productsReducer";
import rootSaga from './sagas/rootSaga';

// объявляем сагу
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
   sorted: sortedReducer,
   cart: cartReducer,
   products: productsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

export type RooState = ReturnType<typeof rootReducer>;

// запускаем корневую сагу
sagaMiddleware.run(rootSaga)