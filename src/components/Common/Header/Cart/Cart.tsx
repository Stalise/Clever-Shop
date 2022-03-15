import { FC, useState } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import Products from "./Products";

const Cart: FC = () => {

   const [viewCart, setViewCart] = useState(false)

   const { productsCart } = useTypedSelector(state => state.cart)

   const changeViewCart = () => {
      !viewCart ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"
      setViewCart(!viewCart)
   }

   const path = process.env.REACT_APP_GITHUB_PATH

   return (
      // подставляем общее количество заказов в content: attr() в css, взятое в data-count.
      <div
         className={`header__cart cart ${viewCart ? '_active' : ''}`}
         data-count={productsCart.reduce((accum, elem) => accum + elem.count, 0)}
      >
         <img onClick={() => changeViewCart()} className="header__search-img" src={`${path}/images/cart.png`} data-test-id={'cart-button'}></img>
         <div onClick={() => changeViewCart()} className="cart__background">
         </div>
         <div className={`cart__container`} data-test-id={'cart'}>
            <div className="cart__top">
               <div className="cart__introduction">
                  <p className="cart__title">Shopping cart</p>
                  <button onClick={() => changeViewCart()} className="cart__close" type="button"></button>
               </div>
               <div className="cart__navigation">
                  <div className="cart__navigation-item _active">Items in cart  <span>/</span></div>
                  <div className="cart__navigation-item">Delivery info  <span>/</span></div>
                  <div className="cart__navigation-item">Payment</div>
               </div>
            </div>
            <div className="cart__content">
               <Products />
            </div>
            <div className="cart__bottom">
               <div className="cart__bottom-text">
                  <p className="cart__bottom-total">Total</p>
                  <p className="cart__bottom-price">$ {
                     // если получается большое число, то обрезаем до 2-десятой, и убираем лишние дробные нули через Number
                     Number(productsCart.reduce((accum, elem) => accum + elem.totalPrice, 0).toFixed(1))
                  }</p>
               </div>
               <div className="cart__bottom-buttons">
                  <button type="button" className="cart__bottom-further">Further</button>
                  <button onClick={() => changeViewCart()} type="button" className="cart__bottom-view">View cart</button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Cart;