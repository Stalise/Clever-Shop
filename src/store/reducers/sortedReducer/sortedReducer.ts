import { IState, sortedActionTypes, SortedActions } from './types';
import { IProductsItem } from '../../../types/productsItem';


const initialState: IState = {
   men: {
      productsSorted: [],
      tab: 'NEW ARRIVALS',
      color: [],
      size: [],
      brand: [],
      price: [],
   },
   women: {
      productsSorted: [],
      tab: 'NEW ARRIVALS',
      color: [],
      size: [],
      brand: [],
      price: [],
   },
}

// console.log(initialState.men.products)

export const sortedReducer = (state = initialState, action: SortedActions): IState => {

   // получаем категорию (men или women) товаров, и выбранный тип для неё, чтобы изменить значения фильтра.
   switch (action.type) {
      case sortedActionTypes.CHANGE_PRODUCTS:
         // получаем категорию (men или women) товаров, и список отсортерованных товаров для неё.
         return {
            ...state,
            [action.payload.category]: {
               ...state[action.payload.category as keyof IState],
               productsSorted: [...action.payload.products]
            }
         }
      case sortedActionTypes.CHANGE_TAB:
         return {
            ...state,
            [action.payload.category]: {
               ...state[action.payload.category as keyof IState],
               tab: action.payload.tab
            }
         };
      // пример - category: men, type: color, params: [...]
      case sortedActionTypes.CHANGE_PARAMS:
         return {
            ...state,
            [action.payload.category]: {
               ...state[action.payload.category as keyof IState],
               [action.payload.type]: [...action.payload.params]
            }
         }
      case sortedActionTypes.CLEAR_SORTED:
         return {
            ...state,
            [action.payload.category]: {
               ...state[action.payload.category as keyof IState],
               color: [],
               size: [],
               brand: [],
               price: []
            }
         }
      default:
         return state
   }
}

//! экшены в функциях вызова
export const changeProductsAction = (products: IProductsItem[], category: string) => {
   return { type: sortedActionTypes.CHANGE_PRODUCTS, payload: { products, category } }
};

export const changeTabAction = (tab: string, category: string) => {
   return { type: sortedActionTypes.CHANGE_TAB, payload: { tab, category } }
};

export const changeParamsAction = (params: string[], category: string, type: string) => {
   return { type: sortedActionTypes.CHANGE_PARAMS, payload: { params, category, type } }
};

export const clearSortedAction = (category: string) => {
   return { type: sortedActionTypes.CLEAR_SORTED, payload: { category } }
};