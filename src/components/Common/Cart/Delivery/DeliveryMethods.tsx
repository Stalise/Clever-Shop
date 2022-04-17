import { FC } from "react";

import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { changeDeliveryMethodCartAction } from '../../../../actions/cartReducer';
import { useDispatch } from "react-redux";

const DeliveryMethods: FC = () => {

   const dispatch = useDispatch()

   const changeMethod = (method: string) => {
      dispatch(changeDeliveryMethodCartAction(method))
   }

   const { deliveryMethod } = useTypedSelector(state => state.cart)

   return (
      <div className="cart-delivery__methods">
         <p className="cart-delivery__methods-title">Choose the method of delivery of the items</p>

         <label className="cart-delivery__method delivery-method">
            <span
               className={`delivery-method__field ${deliveryMethod === 'Pickup from post offices' ? '_active' : ''}`}
            />
            <input
               onChange={() => changeMethod('Pickup from post offices')}
               type="checkbox"
               className="delivery-method__input"
            />
            <span className="delivery-method__text">Pickup from post offices</span>
         </label>

         <label className="cart-delivery__method delivery-method">
            <span
               className={`delivery-method__field ${deliveryMethod === 'Express delivery' ? '_active' : ''}`}
            />
            <input
               onChange={() => changeMethod('Express delivery')}
               type="checkbox"
               className="delivery-method__input"
            />
            <span className="delivery-method__text">Express delivery</span>
         </label>

         <label className="cart-delivery__method delivery-method">
            <span
               className={`delivery-method__field ${deliveryMethod === 'Store pickup' ? '_active' : ''}`}
            />
            <input
               onChange={() => changeMethod('Store pickup')}
               type="checkbox"
               className="delivery-method__input"
            />
            <span className="delivery-method__text">Store pickup</span>
         </label>
      </div>
   );
}

export default DeliveryMethods;