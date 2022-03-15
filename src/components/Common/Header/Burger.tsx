import { FC } from 'react';

interface IProps {
   burger: boolean,
   setBurger: (arg: boolean) => void,
}

const Burger: FC<IProps> = ({ burger, setBurger }) => {

   const changeBurger = () => {
      !burger ? document.body.style.overflow = "hidden" : document.body.style.overflow = "visible"
      setBurger(!burger)
   }

   return (
      <div className={`header__burger burger ${burger ? '_active' : ''}`}>
         <div className="burger__icon" onClick={() => changeBurger()} data-test-id={'burger-menu-btn'}>
            <span className="burger__icon-line"></span>
         </div>
         <div className="burger__background"></div>
      </div>
   );
}

export default Burger;