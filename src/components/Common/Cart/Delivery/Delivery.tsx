import { FC, useRef } from "react";

import { IProductCart } from '../../../../types/cart';
import DeliveryMethods from './DeliveryMethods'
import DeliveryForm from './DeliveryForm';

interface IProps {
   setCurrentTab: (arg: string) => void,
   productsCart: IProductCart[]
}

const Delivery: FC<IProps> = ({ productsCart, setCurrentTab }) => {

   const furtherButton = useRef<HTMLButtonElement>(null)

   return (
      <div className="cart__delivery cart-delivery">
         <div className="cart-delivery__content">
            <DeliveryMethods />

            <DeliveryForm
               furtherButton={furtherButton}
               setCurrentTab={setCurrentTab}
            />
         </div>

         <div className="cart-delivery__actions">
            {productsCart.length > 0 &&
               <div className="cart-delivery__text">
                  <p className="cart-delivery__total">Total</p>
                  <p className="cart-delivery__price">$ {Number(productsCart.reduce((accum, elem) => accum + elem.totalPrice, 0).toFixed(1))}</p>
               </div>
            }
            <div className="cart-delivery__buttons">
               <button
                  ref={furtherButton}
                  type="button"
                  className="cart-delivery__button-further"
               >Further
               </button>

               <button
                  onClick={() => setCurrentTab('Items in cart')}
                  type="button"
                  className="cart-delivery__button-back"
               >View cart
               </button>
            </div>
         </div>
      </div>
   );
}

export default Delivery;