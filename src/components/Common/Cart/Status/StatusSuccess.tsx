import { FC } from "react";

import { clearAllCartAction } from '../../../../actions/cartReducer';

interface IProps {
   setViewCart: (arg: boolean) => void,
   dispatch: any,
}

const StatusSuccess: FC<IProps> = ({ setViewCart, dispatch }) => {

   const clearAllCart = () => {
      dispatch(clearAllCartAction())
      setViewCart(false)
   }

   return (
      <>
         <div className="cart-status__content">
            <p className="cart-status__title">Thank you for your order</p>
            <p className="cart-status__message">Information about your order will appear in your e-mail.</p>
            <p className="cart-status__message">Our manager will call you back.</p>
         </div>

         <div className="cart-status__actions">
            <div className="cart-status__buttons">
               <button
                  onClick={() => clearAllCart()}
                  type="button"
                  className="cart-status__button-further"
               >Back to shopping
               </button>
            </div>
         </div>
      </>
   );
}

export default StatusSuccess;