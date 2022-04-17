import { FC, useEffect } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { changePaymentDataCartAction } from '../../../../actions/cartReducer';
import PaypalFields from './PaypalFields';
import CardFields from './CardFields';

interface IProps {
   furtherButton: HTMLButtonElement | any,
   setCurrentTab: (arg: string) => void,
}

export interface IFormDataPayment {
   email?: string,
   card?: string,
   cardDate?: string,
   cardCVV?: string,
}

const PaymentForm: FC<IProps> = ({ furtherButton, setCurrentTab }) => {

   const dispatch = useDispatch()
   const { paymentMethod, validatePayment } = useTypedSelector(state => state.cart)

   const {
      register,
      formState: { errors },
      handleSubmit,
      getValues,
   } = useForm<IFormDataPayment>({ mode: "onBlur" })

   const onSubmit: SubmitHandler<IFormDataPayment> = (data) => {
      setCurrentTab('Status')
   }

   useEffect(() => {

      furtherButton.current.addEventListener('click', () => {
         handleSubmit(onSubmit)()
      })

      return () => {
         dispatch(changePaymentDataCartAction(getValues()))
      }
   }, [])

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="cart-payment__form payment-form">
         {paymentMethod === 'PayPal' &&
            <PaypalFields
               register={register}
               errors={errors}
               validatePayment={validatePayment}
            />
         }

         {paymentMethod === 'Visa' &&
            <CardFields
               register={register}
               errors={errors}
               validatePayment={validatePayment}
            />
         }

         {paymentMethod === 'MasterCard' &&
            <CardFields
               register={register}
               errors={errors}
               validatePayment={validatePayment}
            />
         }
      </form>
   );
}

export default PaymentForm;