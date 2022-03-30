import { FC, ReactChild } from 'react';
import './MyModal.scss';

interface IProps {
   children: ReactChild | any,
   isModal: boolean,
   setIsModal: (data: boolean) => void
}

const MyModal: FC<IProps> = ({ children, isModal, setIsModal }) => {

   isModal ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"

   const closeModal = () => {
      document.body.style.overflow = "visible"
      setIsModal(!isModal)
   }

   return (
      <div onClick={() => closeModal()} className={`modal ${isModal ? '_active' : ''}`}>
         <div className="modal__container" onClick={(e => e.stopPropagation())}>
            {children}
         </div>
      </div>
   );
}

export default MyModal;