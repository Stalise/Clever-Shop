import { FC } from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';
import { socialLinks, categories, information, useful, paymentsImages } from '../../../constants/footer'
import EmailForm from './EmailForm';

const Footer: FC = () => {

   const path = process.env.REACT_APP_GITHUB_PATH

   return (
      <footer className="footer" data-test-id='footer'>
         <div className="footer__top">
            <div className="footer__top-container">
               <p className="footer__title">BE IN TOUCH WITH US:</p>

               <EmailForm />

               <div className="footer__social">
                  {socialLinks.map(elem => {
                     return <Link to={elem.link} className={elem.class} key={elem.class} />
                  })}
               </div>
            </div>
         </div>

         <div className="footer__content">
            <ul className="footer__list">
               <li className="footer__list-item">Categories</li>

               {categories.map(elem => {
                  return (
                     <li className="footer__list-item" key={elem.text}>
                        <Link to={elem.link} className="footer__list-link">{elem.text}</Link>
                     </li>
                  )
               })}
            </ul>

            <ul className="footer__list">
               <li className="footer__list-item">Infomation</li>

               {information.map(elem => {
                  return (
                     <li className="footer__list-item" key={elem.text}>
                        <Link to={elem.link} className="footer__list-link">{elem.text}</Link>
                     </li>
                  )
               })}
            </ul>

            <ul className="footer__list">
               <li className="footer__list-item">Useful links</li>

               {useful.map(elem => {
                  return (
                     <li className="footer__list-item" key={elem.text}>
                        <Link to={elem.link} className="footer__list-link">{elem.text}</Link>
                     </li>
                  )
               })}
            </ul>

            <ul className="footer__list footer__list-info">
               <li className="footer__list-item">CONTACT US</li>

               <li className="footer__list-item">
                  Belarus, Gomel, Lange 17
               </li>

               <li className="footer__list-item">
                  <a href="tel:+375291002030" className="footer__list-link">+375 29 100 20 30</a>
               </li>

               <li className="footer__list-item">
                  All week 24/7
               </li>

               <li className="footer__list-item">
                  info@clevertec.ru
               </li>
            </ul>
         </div>

         <div className="footer__bottom">
            <p className="footer__copyright">Copyright © 2032 all rights reserved</p>

            <div className="footer__payments">
               {paymentsImages.map((elem, index) => {
                  return (
                     <div className="footer__payments-item" key={index}>
                        <img src={`${path}${elem}`} className="footer__payments-img" alt="payment"></img>
                     </div>
                  )
               })}
            </div>

            <a className="footer__bottom-link">Clevertec.ru/training</a>
         </div>
      </footer>
   );
}

export default Footer;