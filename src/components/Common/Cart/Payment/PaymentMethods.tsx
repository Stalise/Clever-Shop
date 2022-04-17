import { FC } from "react";

import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { changePaymentMethodCartAction } from '../../../../actions/cartReducer';
import { useDispatch } from "react-redux";

const PaymentMethods: FC = () => {

   const dispatch = useDispatch()

   const changeMethod = (method: string) => {
      dispatch(changePaymentMethodCartAction(method))
   }

   const { paymentMethod } = useTypedSelector(state => state.cart)

   return (
      <div className="cart-payment__methods">
         <p className="cart-payment__methods-title">Method of payments</p>

         <label className="cart-payment__method payment-method">
            <span
               className={`payment-method__field ${paymentMethod === 'PayPal' ? '_active' : ''}`}
            />

            <input
               onChange={() => changeMethod('PayPal')}
               type="checkbox"
               className="payment-method__input"
            />

            <img src="./images/payments-colorful_3.png" className="payment-method__image" alt="payment" />
         </label>

         <label className="cart-payment__method payment-method">
            <span
               className={`payment-method__field ${paymentMethod === 'Visa' ? '_active' : ''}`}
            />

            <input
               onChange={() => changeMethod('Visa')}
               type="checkbox"
               className="payment-method__input"
            />

            <img src="./images/payments-colorful_4.png" className="payment-method__image" alt="payment" />
         </label>

         <label className="cart-payment__method payment-method">
            <span
               className={`payment-method__field ${paymentMethod === 'MasterCard' ? '_active' : ''}`}
            />

            <input
               onChange={() => changeMethod('MasterCard')}
               type="checkbox"
               className="payment-method__input"
            />

            <img src="./images/payments-colorful_5.png" className="payment-method__image" alt="payment" />
         </label>

         <label className="cart-payment__method payment-method">
            <span
               className={`payment-method__field ${paymentMethod === 'Cash' ? '_active' : ''}`}
            />

            <input
               onChange={() => changeMethod('Cash')}
               type="checkbox"
               className="payment-method__input"
            />

            <span className="payment-method__text">Cash</span>
         </label>
      </div>
   );
}

export default PaymentMethods;