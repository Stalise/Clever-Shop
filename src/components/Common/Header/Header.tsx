import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import { socialLinks } from '../../../constants/header';
import Burger from './Burger';
import Navigate from './Navigate';
import Cart from '../Cart/Cart';

const Header: FC = () => {

   const path = process.env.REACT_APP_GITHUB_PATH
   // состояние бургера поднято, ибо на него влияют и компонент Burger, и Navigate
   const [burger, setBurger] = useState<boolean>(false)

   return (
      <header className={"header"} data-test-id='header'>
         <div className="header__top-container">
            <div className="header__top">
               <div className="header__info">
                  <a href="tel:+375291002030" className="header__info-phone">+375 29 100 20 30</a>
                  <p className="header__info-adress">Belarus, Gomel, Lange 17</p>
                  <p className="header__info-time">All week 24/7</p>
               </div>
               <div className='header__social'>
                  {socialLinks.map(elem => {
                     return <Link to={elem.href} className={elem.class} key={elem.class} />
                  })}
               </div>
            </div>
         </div>

         <div className="header__bottom-container">
            <div className="header__bottom">
               <Burger burger={burger} setBurger={setBurger} />

               <Link to="/" className="header__logo" data-test-id='header-logo-link'>CleverShop</Link>

               <Navigate burger={burger} setBurger={setBurger} />

               <div className={`header__actions ${burger ? '_active' : ''}`}>
                  <div className="header__search">
                     <img className="header__search-img" src={`${path}/images/search.png`}></img>
                  </div>

                  <div className="header__globe">
                     <img className="header__search-img" src={`${path}/images/globe.png`}></img>
                  </div>

                  <div className="header__user">
                     <img className="header__search-img" src={`${path}/images/user.png`}></img>
                  </div>

                  <Cart />
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;