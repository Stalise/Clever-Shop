import { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import { changeDeliveryShopCountryAction, changeDeliveryShopAdressAction } from '../../../../actions/cartReducer';
import { sagasConstants } from '../../../../constants/saga';

interface IProps {
   register: any,
   errors: any,
   getValues: any,
}

const DeliveryStore: FC<IProps> = ({ register, errors }) => {

   const [currentAdresses, setCurrentAdresses] = useState<string[]>([])

   const { deliveryCountries, deliveryAdress, validateDelivery } = useTypedSelector(state => state.cart)
   const dispatch = useDispatch()

   const changeAdress = (value: string) => {
      dispatch(changeDeliveryShopAdressAction(value))

      if (value.length === 3) {
         dispatch({ type: sagasConstants.REQUEST_ADRESS_SAGA, value })
      }
   }

   useEffect(() => {
      if (deliveryCountries.length === 0) {
         dispatch({ type: sagasConstants.REQUEST_COUNTRIES_SAGA })
      }
   }, [])

   useEffect(() => {
      const getCities = deliveryAdress.map((elem) => elem.city)
      setCurrentAdresses(getCities)

   }, [deliveryAdress])

   return (
      <>
         <label className='delivery-form__input-label'>
            <span className="delivery-form__input-hint">Adress of store</span>

            <select
               defaultValue={validateDelivery.shopCountry.length ? validateDelivery.shopCountry : "Country"}
               className={`delivery-form__select ${validateDelivery.shopCountry.length ? '' : ' _default'}`}
               {...register('shopCountry', {
                  required: true,
                  pattern: { value: /^((?!Country).)*$/ },
               })}
               onChange={(e) => dispatch(changeDeliveryShopCountryAction(e.target.value))}
            >
               <option className="delivery-form__option" value="Country" disabled hidden>Country</option>
               {deliveryCountries.map((elem) => {
                  return (
                     <option className="delivery-form__option" value={elem.name} key={elem._id}>
                        {elem.name}
                     </option>
                  )
               })}
            </select>

            <p className={`delivery-form__input-error ${errors?.storeCountry ? '_active' : ''}`}>
               {errors?.storeCountry?.message || 'Обязательное поле.'}
            </p>
         </label>

         <label className='delivery-form__input-label'>
            <input
               {...register('shopAdress', {
                  required: true,
                  validate: {
                     includesValid: (value: string) => currentAdresses.includes(value) || 'Неправильный адрес',
                  }
               })}
               value={validateDelivery.shopAdress}
               className='delivery-form__input'
               type="text"
               placeholder="Store adress"
               list="adresslist"
               disabled={validateDelivery.shopCountry.length ? false : true}
               onChange={(e) => changeAdress(e.target.value)}
            />

            <datalist id="adresslist">
               {deliveryAdress.map((elem) => {
                  return <option value={elem.city} key={elem._id} />
               })}
            </datalist>

            <p className={`delivery-form__input-error ${errors?.shopAdress ? '_active' : ''}`}>
               {errors?.shopAdress?.message || 'Обязательное поле.'}
            </p>
         </label>
      </>
   );
}

export default DeliveryStore;