import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import './Cart.scss';
import { clearValidateDataCartAction } from '../../../actions/cartReducer';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Products from "./Products/Products";
import Delivery from "./Delivery/Delivery";
import Payment from "./Payment/Payment";
import Status from "./Status/Status";

const Cart: FC = () => {

   const path = process.env.REACT_APP_GITHUB_PATH
   const dispatch = useDispatch()

   const [viewCart, setViewCart] = useState(false)

   const [currentTab, setCurrentTab] = useState('Items in cart')

   const { productsCart } = useTypedSelector(state => state.cart)

   const changeViewCart = () => {
      if (viewCart === false) {
         document.body.style.overflow = "hidden"
      } else {
         document.body.style.overflow = "visible"
         setCurrentTab('Items in cart')
         dispatch(clearValidateDataCartAction())
      }

      setViewCart(!viewCart)
   }

   return (
      <div
         className={`header__cart cart ${viewCart ? '_active' : ''}`}
         data-count={productsCart.length}
      >
         <img onClick={() => changeViewCart()} className="header__search-img" src={`${path}/images/cart.png`} data-test-id={'cart-button'} />
         <div onClick={() => changeViewCart()} className="cart__background" />

         <div className={`cart__container`} data-test-id={'cart'}>
            <div className="cart__top">
               <div className="cart__introduction">
                  <p className="cart__title">Shopping cart</p>
                  <button onClick={() => changeViewCart()} className="cart__close" type="button"></button>
               </div>
               <div className="cart__navigation">
                  <div className={`cart__navigation-item ${currentTab === 'Items in cart' ? '_active' : ''}`}>Items in cart  <span>/</span></div>
                  <div className={`cart__navigation-item ${currentTab === 'Delivery info' ? '_active' : ''}`}>Delivery info  <span>/</span></div>
                  <div className={`cart__navigation-item ${currentTab === 'Payment' ? '_active' : ''}`}>Payment</div>
               </div>
            </div>

            <div className="cart__content">
               {currentTab === 'Items in cart' &&
                  <Products
                     changeViewCart={changeViewCart}
                     setCurrentTab={setCurrentTab}
                     productsCart={productsCart}
                  />
               }

               {currentTab === 'Delivery info' &&
                  <Delivery
                     setCurrentTab={setCurrentTab}
                     productsCart={productsCart}
                  />
               }

               {currentTab === 'Payment' &&
                  <Payment
                     setCurrentTab={setCurrentTab}
                     productsCart={productsCart}
                  />
               }

               {currentTab === 'Status' &&
                  <Status
                     setCurrentTab={setCurrentTab}
                     setViewCart={setViewCart}
                  />
               }
            </div>
         </div>
      </div>
   );
}

export default Cart;