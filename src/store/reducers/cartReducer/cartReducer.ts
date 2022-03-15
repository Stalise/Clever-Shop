import { IState, cartActionTypes } from './types';
import { IProductCart } from '../../../types/cartItem';
import { CartActions } from './types';

const initialState: IState = {
   productsCart: [],
}

export const cartReducer = (state = initialState, action: CartActions): IState => {
   switch (action.type) {
      case cartActionTypes.ADD_PRODUCT:
         return {
            ...state,
            productsCart: [...state.productsCart, action.payload.product]
         }
      case cartActionTypes.DELETE_PRODUCT:
         return {
            ...action,
            productsCart: state.productsCart.filter(elem => elem.idCart !== action.payload.id)
         }
      case cartActionTypes.CHANGE_COUNT:
         return {
            ...action,
            productsCart: state.productsCart.map(elem => {
               // приходит измененный объект, и если он совпадает с тем что из стейта, то заменяем
               if (elem.idCart === action.payload.product.idCart) { return action.payload.product }

               return elem 
            })
         }
      default:
         return state
   }
}

export const addCartAction = (product: IProductCart) => {
   return { type: cartActionTypes.ADD_PRODUCT, payload: { product } }
}

export const deleteCartAction = (id: string) => {
   return { type: cartActionTypes.DELETE_PRODUCT, payload: { id } }
}

export const changeCountCartAction = (product: IProductCart) => {
   return { type: cartActionTypes.CHANGE_COUNT, payload: { product } }
}