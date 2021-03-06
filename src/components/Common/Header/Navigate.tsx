import { FC } from "react";
import { Link } from 'react-router-dom';

import { navigateItems } from '../../../constants/header';

interface IProps {
   burger: boolean,
   setBurger: (arg: boolean) => void,
}

const Navigate: FC<IProps> = ({ burger, setBurger }) => {

   const clickMenuLink = () => {
      if (burger === true) {
         document.body.style.overflow = "visible"
         setBurger(false)
      }
   }

   return (
      <nav className={`header__navigate header-navigate ${burger ? '_active' : ''}`}>
         <ul className="header-navigate__list">
            {navigateItems.map((elem) => {
               return (
                  <li className="header-navigate__item" onClick={() => clickMenuLink()} key={elem.text}>
                     <Link
                        to={elem.path}
                        className="header-navigate__link"
                     >
                        {elem.text}
                     </Link>
                  </li>
               )
            })}
         </ul>
      </nav>
   );
}

export default Navigate;