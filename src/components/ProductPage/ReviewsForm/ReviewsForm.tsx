import { FC, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';

import './ReviewsForm.scss'
import { IProductsItem } from '../../../types/productsItem';
import StarsRating from './StarsRating';
import { reviewRequest } from '../../../api/api';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { replaceProductsAction } from '../../../actions/productsReducer';

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
         setIsRating(1)
         reset()
      } else {
         setIsError('_error')
      }

      setTimeout(() => {
         setIsError('')
      }, 4000)

      setIsLoading(false)
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
                     pattern: { value: /^[a-zA-Z??-????-??????]+$/, message: "???????????????????????? ??????????????." },
                     minLength: { value: 2, message: "?????????????? 2 ??????????????" },
                     maxLength: { value: 20, message: "???????????????? 20 ????????????????" }
                  })}
                  className='reviews-form__input' type="text" placeholder="Example: John"
               />
               <p className={`reviews-form__input-error ${errors.name ? '_active' : null}`}>
                  {errors?.name?.message || '???????????????????????? ???????? ?????? ??????????.'}
               </p>
            </label>

            <label className='reviews-form__input-label' data-test-id={'review-text-field'}>
               <textarea
                  {...register('text', {
                     required: true,
                     // pattern: { value: /^['"?!()#%-_,.a-zA-Z??-????-??????0-9\s]+$/, message: "???????????????????????? ??????????????." },
                     minLength: { value: 10, message: "?????????????? 10 ????????????????" },
                     maxLength: { value: 200, message: "???????????????? 100 ????????????????" }
                  })}
                  className='reviews-form__textarea' placeholder="Example: Nice products"
               />

               <p className={`reviews-form__input-error ${errors.text ? '_active' : null}`}>
                  {errors?.text?.message || '???????????????????????? ???????? ?????? ??????????.'}
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