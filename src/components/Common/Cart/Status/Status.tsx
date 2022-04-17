import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { preparationOrder } from '../../../../utils/cartActions'
import { sagasConstants } from "../../../../constants/saga";
import Loader from "../../Loader/Loader";
import StatusSuccess from "./StatusSuccess";
import StatusError from './StatusError';

interface IProps {
   setCurrentTab: (arg: string) => void,
   setViewCart: (arg: boolean) => void,
}

const Status: FC<IProps> = ({ setCurrentTab, setViewCart }) => {

   const dispatch = useDispatch()
   const { productsCart, validateDelivery, validatePayment, deliveryMethod, paymentMethod, isLoading, isError } = useTypedSelector(state => state.cart)

   useEffect(() => {
      const order = preparationOrder(productsCart, validateDelivery, validatePayment, deliveryMethod, paymentMethod)
      dispatch({ type: sagasConstants.REQUEST_ORDER_SAGA, order })
   }, [])

   return (
      <div className="cart__status cart-status">

         {isLoading === true && <Loader />}

         {isError === 'success' &&
            <StatusSuccess
               setViewCart={setViewCart}
               dispatch={dispatch}
            />
         }

         {isError !== 'success' && isError !== '' &&
            <StatusError
               setCurrentTab={setCurrentTab}
               dispatch={dispatch}
            />
         }
      </div>
   );
}

export default Status;