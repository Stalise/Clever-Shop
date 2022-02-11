import './Header.scss';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {

   const [burger, setBurger] = useState<boolean>(false)

   const changeBurger = () => {
      setBurger(!burger)
   }

   return (
      <header className={burger ? "header _active" : "header"} data-test-id='header'>
         <div className="header__top-container">
            <div className="header__top">
               <div className="header__info">
                  <a href="tel:+375291002030" className="header__info-phone">+375 29 100 20 30</a>
                  <p className="header__info-adress">Belarus, Gomel, Lange 17</p>
                  <p className="header__info-time">All week 24/7</p>
               </div>
               <div className="header__social">
                  <a href="#!" className="header__social-facebook"></a>
                  <a href="#!" className="header__social-twitter"></a>
                  <a href="#!" className="header__social-instagram"></a>
                  <a href="#!" className="header__social-pinterest"></a>
               </div>
            </div>
         </div>

         <div className="header__bottom-container">
            <div className="header__bottom">
               <div className="header__burger-icon" onClick={() => changeBurger()}>
                  <span className="header__burger-line"></span>
               </div>

               <Link to="/" className="header__logo" data-test-id='header-logo-link'>CleverShop</Link>

               <nav className="header__navigate header-navigate" data-test-id='menu'>
                  <ul className="header-navigate__list">
                     <li className="header-navigate__item">
                        <Link to="/" className="header-navigate__link" data-test-id={`menu-link-about`}>About Us</Link>
                     </li>

                     <li className="header-navigate__item">
                        <Link to={'/category/women'} className="header-navigate__link" data-test-id={`menu-link-women`}>Women</Link>
                     </li>

                     <li className="header-navigate__item">
                        <Link to="/category/men" className="header-navigate__link" data-test-id={`menu-link-men`}>Men</Link>
                     </li>

                     <li className="header-navigate__item">
                        <Link to="/" className="header-navigate__link" data-test-id={`menu-link-beauty`}>Beauty</Link>
                     </li>

                     <li className="header-navigate__item">
                        <Link to="/" className="header-navigate__link" data-test-id={`menu-link-accessories`}>Accessories</Link>
                     </li>

                     <li className="header-navigate__item">
                        <Link to="/" className="header-navigate__link" data-test-id={`menu-link-blog`}>Blog</Link>
                     </li>

                     <li className="header-navigate__item">
                        <Link to="/" className="header-navigate__link" data-test-id={`menu-link-contact`}>Contact</Link>
                     </li>
                  </ul>
               </nav>

               <div className="header__actions">
                  <div className="header__search">
                     <img className="header__search-img" src="/images/search.png"></img>
                  </div>
                  <div className="header__globe">
                     <img className="header__search-img" src="/images/globe.png"></img>
                  </div>
                  <div className="header__user">
                     <img className="header__search-img" src="/images/user.png"></img>
                  </div>
                  <div className="header__cart">
                     <img className="header__search-img" src="/images/cart.png"></img>
                  </div>
               </div>
            </div>
            <div className="header__burger"></div>
         </div>
      </header>
   );
}

export default Header;