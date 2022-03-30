import { IState, IProducts, productsActionTypes, CartActions } from './types';

const initialState: IState = {
   products: {
      men: [],
      women: []
   },
   isLoading: true,
   isError: false,
}

export const productsReducer = (state = initialState, action: CartActions) => {
   switch (action.type) {
      case productsActionTypes.ADD_PRODUCTS:
         return {
            ...state,
            products: { ...action.payload.products },
            isLoading: true,
         }
      case productsActionTypes.ADD_PRODUCT:
         return {
            ...state,
            products: {
               ...state.products,
               [action.payload.category]: [action.payload.product]
            },
            isLoading: action.payload.loadingStatus
         }
      case productsActionTypes.REPLACE_PRODUCTS:
         return {
            ...state,
            products: {
               ...state.products,
               [action.payload.category]: action.payload.products
            }
         }
      case productsActionTypes.CHANGE_LOADING:
         return {
            ...state,
            isLoading: action.payload.loadingStatus
         }
      case productsActionTypes.CHANGE_ERROR:
         return {
            ...state,
            isLoading: action.payload.loadingStatus,
            isError: action.payload.errorStatus
         }
      default:
         return state
   }
}