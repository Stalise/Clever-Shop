import { IProductCart } from '../types/cartItem';
import { IProductsItem } from '../types/productsItem';
import { ICurrentParams } from '../pages/ProductPage/ProductPage';
import { addCartAction, deleteCartAction, changeCountCartAction } from '../actions/cartReducer';

interface IChangeArguments {
   (
      operator: string,
      product: IProductCart,
      dispatch: any,
   ): void,
}

interface IDeleteArguments {
   (
      idCart: string,
      dispatch: any,
   ): void,
}

interface IAddArguments {
   (
      currentProduct: IProductsItem,
      currentParams: ICurrentParams,
      cartStatus: boolean,
      category: string,
      dispatch: any,
   ): void,
}

export const addCart: IAddArguments = (currentProduct, currentParams, cartStatus, category, dispatch) => {
   // формируем уникальное id для товара с определнными характеристиками.
   const idProductCart = currentProduct.id + currentParams.color + currentParams.size;

   // в зависимости от статуса товара в корзине, добавляем или удаляем его по клику на кнопку
   if (cartStatus === false) {
      // получаем url картинки по цвету для товара в корзине.
      const currentImg = currentProduct.images.filter((elem) => elem.color === currentParams.color)[0].url

      // данные товара для объекта в корзине
      const productData = {
         category,
         idCart: idProductCart,
         img: currentImg,
         name: currentProduct?.name,
         color: currentParams.color,
         size: currentParams.size,
         price: currentProduct?.price,
         count: 1,
         totalPrice: currentProduct?.price,
      }

      dispatch(addCartAction(productData))
   } else {
      dispatch(deleteCartAction(idProductCart))
   }
}

export const deleteCart: IDeleteArguments = (idCart, dispatch) => {
   dispatch(deleteCartAction(idCart))
}

export const changeCount: IChangeArguments = (operator, product, dispatch) => {
   const copyProduct = { ...product }

   if (operator === '+' && product.count < 100 && product.count >= 1) {
      copyProduct.count += 1
      // если получается большое число, то обрезаем до 2-десятой, и убираем лишние дробные нули через Number
      copyProduct.totalPrice = Number((copyProduct.totalPrice + copyProduct.price).toFixed(2))

   } else if (operator === '-' && product.count > 1) {
      copyProduct.count -= 1
      copyProduct.totalPrice = Number((copyProduct.totalPrice - copyProduct.price).toFixed(2))
   }

   dispatch(changeCountCartAction(copyProduct))
}