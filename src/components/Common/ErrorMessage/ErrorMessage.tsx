import { FC } from 'react';
import './ErrorMessage.scss';

interface IProps {
   text: string
}

const ErrorMessage: FC<IProps> = ({ text }) => {

   return (
      <div className="error__container" data-test-id='error'>
         <p className="error__message">{text}</p>
      </div>
   );
}

export default ErrorMessage;