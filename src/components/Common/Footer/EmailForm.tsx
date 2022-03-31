import { FC, useState } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';

import { emailRequest } from '../../../api/api';

interface IFormData {
   email: string
}

const EmailForm: FC = () => {

   const [isLoading, setIsLoading] = useState(false)
   const [isError, setIsError] = useState('')

   const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset
   } = useForm<IFormData>({ mode: "onChange" })

   const onSubmit: SubmitHandler<IFormData> = async (data) => {
      setIsLoading(true)
      const response = await emailRequest(data.email)

      if (response === 200) {
         setIsError('_success')
         reset()
      } else {
         setIsError('_error')
      }

      setTimeout(() => {
         setIsError('')
      }, 4000)

      setIsLoading(false)
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="footer__form footer-form">
         <label className='footer-form__input-label' data-test-id={'footer-mail-field'}>
            <p className={`footer-form__input-error ${errors?.email?.message ? '_active' : ''}`}>
               {errors?.email?.message}
            </p>
            <input
               {...register('email', {
                  required: true,
                  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i, message: "Некорректный email" },
               })}
               className='footer-form__input' type="email" placeholder="Enter your email"
            />
         </label>

         <button
            type="submit"
            disabled={!isValid}
            className={`footer-form__submit-button ${isLoading ? '_loading' : ''} ${isError}`}
            data-test-id={'footer-subscribe-mail-button'}
         >Subscribe</button>
      </form>
   );
}

export default EmailForm;