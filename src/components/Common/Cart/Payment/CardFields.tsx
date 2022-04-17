import { FC, useState } from "react";
import InputMask from "react-input-mask";

import { IValidateDataPayment } from '../../../../store/reducers/cartReducer/types';
import { currentDate, enteredDate } from '../../../../utils/getDate';

interface IProps {
   register: any,
   errors: any,
   validatePayment: IValidateDataPayment,
}

const CardFields: FC<IProps> = ({ register, errors, validatePayment }) => {

   const [showCvv, setShowCvv] = useState(false)

   return (
      <>
         <label className='payment-form__input-label'>
            <span className="payment-form__input-hint">Card</span>

            <InputMask
               className='payment-form__input'
               mask="9999 9999 9999 9999"
               placeholder="---- ---- ---- ----"
               defaultValue={validatePayment.card}
               {...register('card', {
                  required: true,
                  pattern: { value: /^(\d{4}) (\d{4}) (\d{4}) (\d{4})$/, message: "Некорректный номер" },
               })}
            />

            <p className={`payment-form__input-error ${errors?.card ? '_active' : ''}`}>
               {errors?.card?.message || 'Обязательное поле'}
            </p>
         </label>

         <div className="payment-form__card-container">
            <label className='payment-form__input-label'>
               <InputMask
                  className='payment-form__input'
                  mask="99/99"
                  placeholder="MM/YY"
                  defaultValue={validatePayment.cardDate}
                  {...register('cardDate', {
                     required: true,
                     pattern: { value: /^(0\d|1[0-2])\/\d{2}$/, message: "Некорректная дата" },
                     validate: {
                        checkDate: (value: string) => currentDate() < enteredDate(value) || 'Некорректный дата',
                     }
                  })}
               />

               <p className={`payment-form__input-error ${errors?.cardDate ? '_active' : ''}`}>
                  {errors?.cardDate?.message || 'Обязательное поле'}
               </p>
            </label>

            <label className='payment-form__input-label'>
               <input
                  className='payment-form__input'
                  placeholder="CVV"
                  defaultValue={validatePayment.cardCVV}
                  type={showCvv ? 'text' : 'password'}
                  {...register('cardCVV', {
                     required: true,
                     pattern: { value: /^(\d{3}|\d{4})$/, message: "Некорректный номер" },
                  })}
               />

               <button
                  onClick={() => setShowCvv(!showCvv)}
                  type="button"
                  className={`payment-form__cvv-check ${showCvv ? '_active' : ''}`}>
               </button>

               <p className={`payment-form__input-error ${errors?.cardCVV ? '_active' : ''}`}>
                  {errors?.cardCVV?.message || 'Обязательное поле.'}
               </p>
            </label>
         </div>
      </>
   );
}

export default CardFields;