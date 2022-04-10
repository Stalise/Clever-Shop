import { IState, sortedActionTypes, SortedActions } from './types';


const initialState: IState = {
   men: {
      productsSorted: [],
      tab: 'isNewArrivals',
      color: [],
      size: [],
      brand: [],
      price: [],
   },
   women: {
      productsSorted: [],
      tab: 'isNewArrivals',
      color: [],
      size: [],
      brand: [],
      price: [],
   },
}

export const sortedReducer = (state = initialState, action: SortedActions): IState => {

   // получаем категорию (men или women) товаров, и выбранный тип для неё, чтобы изменить значения фильтра.
   switch (action.type) {
      case sortedActionTypes.CHANGE_PRODUCTS:
         // получаем категорию (men или women) товаров, и список отсортерованных товаров для неё.
         return {
            ...state,
            [action.payload.category]: {
               ...state[action.payload.category],
               productsSorted: [...action.payload.products]
            }
         }
      case sortedActionTypes.CHANGE_TAB:
         return {
            ...state,
            [action.payload.category]: {
               ...state[action.payload.category],
               tab: action.payload.tab
            }
         };
      // пример - category: men, type: color, params: [...]
      case sortedActionTypes.CHANGE_PARAMS:
         return {
            ...state,
            [action.payload.category]: {
               ...state[action.payload.category],
               [action.payload.type]: [...action.payload.params]
            }
         }
      case sortedActionTypes.CLEAR_SORTED:
         return {
            ...state,
            [action.payload.category]: {
               ...state[action.payload.category],
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
