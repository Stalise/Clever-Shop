import { FC } from "react";
import InputMask from "react-input-mask";

import { IValidateDataDelivery } from '../../../../store/reducers/cartReducer/types';

interface IProps {
   register: any,
   errors: any,
   validateDelivery: IValidateDataDelivery
}

const DeliveryOffice: FC<IProps> = ({ register, errors, validateDelivery }) => {

   return (
      <>
         <label className='delivery-form__input-label'>
            <span className="delivery-form__input-hint">Adress</span>
            <input
               {...register('country', {
                  required: true,
               })}
               className='delivery-form__input'
               type="text"
               placeholder="Country"
               defaultValue={validateDelivery.country}
            />
            <p className={`delivery-form__input-error ${errors?.country ? '_active' : ''}`}>
               {errors?.country?.message || 'Поле должно быть заполнено'}
            </p>
         </label>

         <label className='delivery-form__input-label'>
            <input
               {...register('city', {
                  required: true,
               })}
               className='delivery-form__input'
               type="text"
               placeholder="City"
               defaultValue={validateDelivery.city}
            />
            <p className={`delivery-form__input-error ${errors?.city ? '_active' : ''}`}>
               {errors?.city?.message || 'Поле должно быть заполнено'}
            </p>
         </label>

         <label className='delivery-form__input-label'>
            <input
               {...register('street', {
                  required: true,
               })}
               className='delivery-form__input'
               type="text"
               placeholder="Street"
               defaultValue={validateDelivery.street}
            />
            <p className={`delivery-form__input-error ${errors?.street ? '_active' : ''}`}>
               {errors?.street?.message || 'Поле должно быть заполнено'}
            </p>
         </label>

         <div className="delivery-form__adress-container">
            <label className='delivery-form__input-label'>
               <input
                  {...register('house', {
                     required: true,
                  })}
                  className='delivery-form__input'
                  type="text"
                  placeholder="House"
                  defaultValue={validateDelivery.house}
               />
               <p className={`delivery-form__input-error ${errors?.house ? '_active' : ''}`}>
                  {errors?.house?.message || 'Поле должно быть заполнено'}
               </p>
            </label>

            <label className='delivery-form__input-label'>
               <input
                  {...register('apartment')}
                  className='delivery-form__input'
                  type="text"
                  placeholder="Apartment"
                  defaultValue={validateDelivery.apartment}
               />
               <p className={`delivery-form__input-error ${errors?.apartment ? '_active' : ''}`}>
                  {errors?.apartment?.message || 'Обязательное поле.'}
               </p>
            </label>
         </div>

         <label className='delivery-form__input-label'>
            <span className="delivery-form__input-hint">Postcode</span>
            <InputMask
               className='delivery-form__input'
               mask="BY\ 999999"
               placeholder="BY ______"
               defaultValue={validateDelivery.postcode}
               {...register('postcode', {
                  required: true,
                  pattern: { value: /^(BY) (\d{6})$/, message: "Некорректный индекс" },
               })}
            />
            <p className={`delivery-form__input-error ${errors?.postcode ? '_active' : ''}`}>
               {errors?.postcode?.message || 'Поле должно быть заполнено'}
            </p>
         </label>
      </>
   );
}

export default DeliveryOffice;