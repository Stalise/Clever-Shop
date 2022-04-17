import { FC } from "react";

import { clearValidateDataCartAction } from '../../../../actions/cartReducer';

interface IProps {
   setCurrentTab: (arg: string) => void,
   dispatch: any,
}

const StatusError: FC<IProps> = ({ setCurrentTab, dispatch }) => {

   const viewCart = () => {
      setCurrentTab('Items in cart')
      dispatch(clearValidateDataCartAction())
   }

   return (
      <>
         <div className="cart-status__content">
            <p className="cart-status__title">Sorry, your payment has not been processed.</p>
            <p className="cart-status__message">Failed to pay for the order, the problem is on the side of the bank</p>
         </div>

         <div className="cart-status__actions">
            <div className="cart-status__buttons">
               <button
                  onClick={() => setCurrentTab('Payment')}
                  type="button"
                  className="cart-status__button-further"
               >Back to payment
               </button>

               <button
                  onClick={() => viewCart()}
                  type="button"
                  className="cart-status__button-back"
               >View cart
               </button>
            </div>
         </div>
      </>
   );
}

export default StatusError;