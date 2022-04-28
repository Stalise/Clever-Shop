import { FC } from "react";

import { IValidateDataPayment } from '../../../../store/reducers/cartReducer/types';

interface IProps {
   register: any,
   errors: any,
   validatePayment: IValidateDataPayment,
}

const PaypalFields: FC<IProps> = ({ register, errors, validatePayment }) => {

   return (
      <label className='payment-form__input-label'>
         <span className="payment-form__input-hint">E-Mail</span>

         <input
            {...register('email', {
               required: true,
               pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i, message: "Некорректный email" },
            })}
            className='payment-form__input'
            type="email"
            placeholder="Enter your email"
            defaultValue={validatePayment.email}
         />

         <p className={`payment-form__input-error ${errors?.email ? '_active' : ''}`}>
            {errors?.email?.message || 'Поле должно быть заполнено'}
         </p>
      </label>
   );
}

export default PaypalFields;