import { createStore, combineReducers } from "redux";
import { sortedReducer } from "./reducers/sortedReducer/sortedReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
   sorted: sortedReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())

export type RooState = ReturnType<typeof rootReducer>;