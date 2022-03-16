import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IProductsItem } from '../../types/productsItem';
import { ICurrentParams } from '../../pages/ProductPage/ProductPage';
import { addCartAction, deleteCartAction } from '../../store/reducers/cartReducer/cartReducer';
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface IProps {
   currentProduct: IProductsItem;
   currentParams: ICurrentParams;
   category: string,
}

const Actions: FC<IProps> = ({ currentProduct, currentParams, category }) => {

   const [cartStatus, setCartStatus] = useState<boolean>(false)
   const { productsCart } = useTypedSelector(state => state.cart)
   const dispatch = useDispatch()

   const cartAdd = () => {
      // формируем уникальное id для товара с определнными характеристиками.
      const idProductCart = currentProduct?.id + currentParams.color + currentParams.size;

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

   useEffect(() => {

      // формируем уникальное id для товара с определнными характеристиками.
      const idProductCart = currentProduct?.id + currentParams.color + currentParams.size;

      setCartStatus(false)
      // проверяем есть ли указанный товар в корзине при первой отрисовке и смене товаров или смене размера
      for (let i of productsCart) {
         // console.log(productsCart)
         if (i.idCart === idProductCart) {
            setCartStatus(true)
         }
      }
   }, [productsCart, currentProduct, currentParams])

   return (
      <div className="product__actions">
         <p className="product__price">$ {currentProduct?.price}</p>
         <button
            onClick={() => cartAdd()}
            className="product__button-cart"
            type="button"
            data-test-id={'add-cart-button'}
         >
            {cartStatus ? 'REMOVE FROM CART' : 'ADD TO CART'}
         </button>

         <button className="product__button-favourites" type="button"></button>

         <button className="product__button-compare" type="button"></button>
      </div>
   );
}

export default Actions;