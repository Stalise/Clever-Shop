import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { sortedReducer } from "./reducers/sortedReducer/sortedReducer";
import { cartReducer } from "./reducers/cartReducer/cartReducer";

const rootReducer = combineReducers({
   sorted: sortedReducer,
   cart: cartReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())

export type RooState = ReturnType<typeof rootReducer>;