import { IProductCart } from '../types/cart';
import { IProductsItem } from '../types/productsItem';
import { IValidateDataDelivery, IValidateDataPayment } from '../store/reducers/cartReducer/types';
import { ICurrentParams } from '../pages/ProductPage/ProductPage';
import { addProductCartAction, deleteProductCartAction, changeCountProductCartAction } from '../actions/cartReducer';

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

interface IPreparationOrder {
   (
      productsCart: IProductCart[],
      validateDelivery: IValidateDataDelivery,
      validatePayment: IValidateDataPayment,
      deliveryMethod: string,
      paymentMethod: string,
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

      dispatch(addProductCartAction(productData))
   } else {
      dispatch(deleteProductCartAction(idProductCart))
   }
}

export const deleteCart: IDeleteArguments = (idCart, dispatch) => {
   dispatch(deleteProductCartAction(idCart))
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

   dispatch(changeCountProductCartAction(copyProduct))
}

export const preparationOrder: IPreparationOrder = (productsCart, validateDelivery, validatePayment, deliveryMethod, paymentMethod) => {
   const cartItems = productsCart.map((elem) => {
      return ({
         name: elem.name,
         size: elem.size,
         color: elem.color,
         quantity: elem.count,
      })
   })

   const totalCost = Number(productsCart.reduce((accum, elem) => accum + elem.totalPrice, 0).toFixed(1))

   // const transformPhone = validateDelivery.phone.replaceAll('-', '').replaceAll

   const order = {
      products: cartItems,
      deliveryMethod,
      paymentMethod,
      totalPrice: totalCost,
      phone: validateDelivery.phone,
      email: validateDelivery.email,
      country: validateDelivery.shopAdress.length > 0 ? validateDelivery.shopCountry : validateDelivery.country,
      cashEmail: validatePayment.email,
      city: validateDelivery.city,
      street: validateDelivery.street,
      house: validateDelivery.house,
      apartment: validateDelivery.apartment,
      postcode: validateDelivery.postcode.split(' ')[1],
      storeAddress: validateDelivery.shopAdress,
      card: validatePayment.card,
      cardDate: validatePayment.cardDate,
      cardCVV: validatePayment.cardCVV,
   }

   return order
}
