import { IProductCart } from '../types/cartItem';
import { cartActionTypes } from '../store/reducers/cartReducer/types';

export const addCartAction = (product: IProductCart) => {
   return { type: cartActionTypes.ADD_PRODUCT_CART, payload: { product } }
}

export const deleteCartAction = (id: string) => {
   return { type: cartActionTypes.DELETE_PRODUCT_CART, payload: { id } }
}

export const changeCountCartAction = (product: IProductCart) => {
   return { type: cartActionTypes.CHANGE_COUNT_CART, payload: { product } }
}