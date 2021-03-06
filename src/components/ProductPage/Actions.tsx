import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { IProductsItem } from '../../types/productsItem';
import { ICurrentParams } from '../../pages/ProductPage/ProductPage';
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { addCart } from '../../utils/cartActions';

interface IProps {
   currentProduct: IProductsItem;
   currentParams: ICurrentParams;
   category: string,
}

const Actions: FC<IProps> = ({ currentProduct, currentParams, category }) => {

   const dispatch = useDispatch()
   const { productsCart } = useTypedSelector(state => state.cart)

   const [cartStatus, setCartStatus] = useState<boolean>(false)

   useEffect(() => {
      // формируем уникальное id для товара с определнными характеристиками.
      const idProductCart = currentProduct.id + currentParams.color + currentParams.size;

      setCartStatus(false)
      // проверяем есть ли указанный товар в корзине при первой отрисовке и смене товаров или смене размера
      productsCart.forEach(elem => {
         if (elem.idCart === idProductCart) {
            setCartStatus(true)
         }
      })

   }, [productsCart, currentProduct, currentParams])

   return (
      <div className="product__actions">
         <p className="product__price">$ {currentProduct?.price}</p>
         <button
            onClick={() => addCart(currentProduct, currentParams, cartStatus, category, dispatch)}
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