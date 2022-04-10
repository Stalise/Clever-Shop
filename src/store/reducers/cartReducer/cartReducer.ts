import { IState, cartActionTypes } from './types';
import { CartActions } from './types';

const initialState: IState = {
   productsCart: [],
}

export const cartReducer = (state = initialState, action: CartActions): IState => {
   switch (action.type) {
      case cartActionTypes.ADD_PRODUCT_CART:
         return {
            ...state,
            productsCart: [...state.productsCart, action.payload.product]
         }
      case cartActionTypes.DELETE_PRODUCT_CART:
         return {
            ...action,
            productsCart: state.productsCart.filter(elem => elem.idCart !== action.payload.id)
         }
      case cartActionTypes.CHANGE_COUNT_CART:
         return {
            ...action,
            productsCart: state.productsCart.map(elem => {
               // приходит измененный объект, и если он совпадает с тем что из стейта, то заменяем
               if (elem.idCart === action.payload.product.idCart) {
                  return action.payload.product
               }

               return elem
            })
         }
      default:
         return state
   }
}