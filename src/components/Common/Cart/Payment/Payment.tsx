import { FC, useRef } from "react";

import { IProductCart } from '../../../../types/cart';
import PaymentMethods from './PaymentMethods';
import PaymentForm from './PaymentForm';
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

interface IProps {
   setCurrentTab: (arg: string) => void,
   productsCart: IProductCart[]
}

const Payment: FC<IProps> = ({ productsCart, setCurrentTab }) => {

   const furtherButton = useRef<HTMLButtonElement>(null)
   const { paymentMethod } = useTypedSelector(state => state.cart)

   return (
      <div className="cart__payment cart-payment">
         <div className="cart-payment__content">
            <PaymentMethods />

            <PaymentForm
               furtherButton={furtherButton}
               setCurrentTab={setCurrentTab}
            />
         </div>

         <div className="cart-payment__actions">
            {productsCart.length > 0 &&
               <div className="cart-payment__text">
                  <p className="cart-payment__total">Total</p>
                  <p className="cart-payment__price">$ {Number(productsCart.reduce((accum, elem) => accum + elem.totalPrice, 0).toFixed(1))}</p>
               </div>
            }
            <div className="cart-payment__buttons">
               <button
                  ref={furtherButton}
                  type="button"
                  className="cart-payment__button-further"
               >{paymentMethod === 'Cash' ? 'ready' : 'check out'}
               </button>

               <button
                  onClick={() => setCurrentTab('Delivery info')}
                  type="button"
                  className="cart-payment__button-back"
               >View cart
               </button>
            </div>
         </div>
      </div>
   );
}

export default Payment;