import './ReviewsForm.scss'
import { FC, useEffect, useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';

import { IProductsItem } from '../../../types/productsItem';
import StarsRating from './StarsRating';
import { reviewRequest } from '../../../api/api';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { replaceProductsAction } from '../../../store/reducers/productsReducer/actions';

interface IProps {
   currentProduct: IProductsItem,
   setIsModal: (data: boolean) => void
}

interface IFormData {
   name: string,
   text: string
}

export interface IResultData extends IFormData {
   rating: number,
   id: string
}

const ReviewsForm: FC<IProps> = ({ currentProduct, setIsModal }) => {

   const dispatch = useDispatch()
   const categoryProducts = useTypedSelector(state => state.products.products[currentProduct.category as keyof typeof state.products.products])
   const [isRating, setIsRating] = useState(1)
   const [isLoading, setIsLoading] = useState(false)
   const [isError, setIsError] = useState('')

   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset
   } = useForm<IFormData>({ mode: "onChange" })

   const onSubmit: SubmitHandler<IFormData> = async (data) => {
      const updateData: IResultData = {
         ...data,
         id: currentProduct.id,
         rating: isRating
      }

      setIsLoading(true)
      const response: { status: number, data?: IProductsItem } = await reviewRequest(updateData)

      if (response.status === 200) {
         setIsError('_success')

         const updateProducts = categoryProducts.map((elem) => {
            if (elem.id === response.data?.id) {
               return response.data
            }
            return elem
         })

         dispatch(replaceProductsAction(updateProducts, currentProduct.category))
         setIsModal(false)
      } else {
         setIsError('_error')
      }

      setTimeout(() => {
         setIsError('')
      }, 3500)

      setIsLoading(false)
      setIsRating(1)
      reset()
   }

   useEffect(() => {
      setIsRating(1)
      reset()
   }, [currentProduct.id])

   return (
      <div className="reviews-modal" data-test-id={'review-modal'}>
         <p className="reviews-modal__title">Write a review</p>
         <StarsRating isRating={isRating} setIsRating={setIsRating} />

         <form onSubmit={handleSubmit(onSubmit)} className="reviews-modal__form reviews-form">

            <label className='reviews-form__input-label' data-test-id={'review-name-field'}>
               <input
                  {...register('name', {
                     required: true,
                     pattern: { value: /^[a-zA-Zа-яА-ЯёЁ]+$/, message: "Некорректные символы." },
                     minLength: { value: 2, message: "Минимум 2 символа" },
                     maxLength: { value: 20, message: "Максимум 20 символов" }
                  })}
                  className='reviews-form__input' type="text" placeholder="Example: John"
               />
               <p className={`reviews-form__input-error ${errors.name ? '_active' : null}`}>
                  {errors?.name?.message || 'Обязательное поле для ввода.'}
               </p>
            </label>

            <label className='reviews-form__input-label' data-test-id={'review-text-field'}>
               <textarea
                  {...register('text', {
                     required: true,
                     // pattern: { value: /^['"?!()#%-_,.a-zA-Zа-яА-ЯёЁ0-9\s]+$/, message: "Некорректные символы." },
                     minLength: { value: 10, message: "Минимум 10 символов" },
                     maxLength: { value: 200, message: "Максимум 100 символов" }
                  })}
                  className='reviews-form__textarea' placeholder="Example: Nice products"
               />

               <p className={`reviews-form__input-error ${errors.text ? '_active' : null}`}>
                  {errors?.text?.message || 'Обязательное поле для ввода.'}
               </p>
            </label>

            <button
               type="submit"
               disabled={!isValid}
               className={`reviews-form__submit-button ${isLoading ? '_loading' : ''} ${isError}`}
               data-test-id={'review-submit-button'}
            >Send</button>
         </form>

         <div className="reviews-modal__close" onClick={() => setIsModal(false)}></div>
      </div>
   );
}

export default ReviewsForm;