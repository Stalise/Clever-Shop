import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from 'react-hook-form';
import InputMask from "react-input-mask";

import { changeDeliveryDataCartAction } from '../../../../actions/cartReducer';
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import DeliveryOffice from './Office';
import DeliveryStore from './Store';
import DeliveryExpress from './Express';

interface IProps {
   furtherButton: HTMLButtonElement | any,
   setCurrentTab: (arg: string) => void,
}

export interface IFormDataDelivery {
   phone: string,
   email: string,
   country?: string,
   city?: string,
   street?: string,
   house?: string,
   apartment?: string,
   postcode?: string,
   privacy: boolean,
   shopCountry?: string,
   shopAdress?: string,
}

const DeliveryForm: FC<IProps> = ({ furtherButton, setCurrentTab }) => {

   const dispatch = useDispatch()
   const { validateDelivery, deliveryMethod } = useTypedSelector(state => state.cart)

   const {
      register,
      formState: { errors },
      handleSubmit,
      getValues,
   } = useForm<IFormDataDelivery>({ mode: "onChange" })

   const onSubmit: SubmitHandler<IFormDataDelivery> = (data) => {
      setCurrentTab('Payment')
   }

   useEffect(() => {

      furtherButton.current.addEventListener('click', () => {
         handleSubmit(onSubmit)()
      })

      return () => {
         dispatch(changeDeliveryDataCartAction(getValues()))
      }
   }, [])

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="cart__delivery-form delivery-form">
         <label className='delivery-form__input-label'>
            <span className="delivery-form__input-hint">Phone</span>

            <InputMask
               className='delivery-form__input'
               mask="+375\ (99) 999-99-99"
               placeholder="+375 (__) ___-__-__"
               defaultValue={validateDelivery.phone}
               {...register('phone', {
                  required: true,
                  pattern: { value: /^(\+375) \((29|25|44|33)\) (\d{3})-(\d{2})-(\d{2})$/, message: "Некорректный номер" },
               })}
            />

            <p className={`delivery-form__input-error ${errors?.phone ? '_active' : ''}`}>
               {errors?.phone?.message || 'Поле должно быть заполнено'}
            </p>
         </label>

         <label className='delivery-form__input-label'>
            <span className="delivery-form__input-hint">E-Mail</span>
            <input
               {...register('email', {
                  required: true,
                  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i, message: "Некорректный email" },
               })}
               className='delivery-form__input'
               type="email"
               placeholder="e-mail"
               defaultValue={validateDelivery.email}
            />
            <p className={`delivery-form__input-error ${errors?.email ? '_active' : ''}`}>
               {errors?.email?.message || 'Поле должно быть заполнено'}
            </p>
         </label>

         {deliveryMethod === 'Pickup from post offices' &&
            <DeliveryOffice
               register={register}
               errors={errors}
               validateDelivery={validateDelivery}
            />
         }

         {deliveryMethod === 'Express delivery' &&
            <DeliveryExpress
               register={register}
               errors={errors}
               validateDelivery={validateDelivery}
            />
         }

         {deliveryMethod === 'Store pickup' &&
            <DeliveryStore
               register={register}
               errors={errors}
               getValues={getValues}
            />
         }

         <label className="delivery-form__privacy">
            <input
               type="checkbox"
               className="delivery-form__privacy-input"
               defaultChecked={validateDelivery.privacy}
               {...register('privacy', {
                  required: true,
               })}
            />

            <span className="delivery-form__privacy-text">I agree to the processing of my personal information</span>

            <p className={`delivery-form__input-error ${errors?.privacy ? '_active' : ''}`}>
               {errors?.privacy?.message || 'Вы должны согласиться на обработку личной информации'}
            </p>
         </label>
      </form>
   );
}

export default DeliveryForm;