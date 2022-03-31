import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

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
                  <a href="#!" className="footer__social-facebook"></a>
                  <a href="#!" className="footer__social-twitter"></a>
                  <a href="#!" className="footer__social-instagram"></a>
                  <a href="#!" className="footer__social-pinterest"></a>
               </div>
            </div>
         </div>

         <div className="footer__content">
            <ul className="footer__list">
               <li className="footer__list-item">Categories</li>

               <li className="footer__list-item">
                  <Link to={'/men'} className="footer__list-link" data-test-id={'footer-nav-link-men'}>Men</Link>
               </li>

               <li className="footer__list-item">
                  <Link to={'/women'} className="footer__list-link" data-test-id={'footer-nav-link-women'}>Women</Link>
               </li>

               <li className="footer__list-item">
                  <Link to={'/'} className="footer__list-link" data-test-id={'footer-nav-link-accessories'}>Accessories</Link>
               </li>

               <li className="footer__list-item">
                  <Link to={'/'} className="footer__list-link" data-test-id={'footer-nav-link-beauty'}>Beauty</Link>
               </li>
            </ul>

            <ul className="footer__list">
               <li className="footer__list-item">Infomation</li>

               <li className="footer__list-item">
                  <Link to={'/'} className="footer__list-link">About Us</Link>
               </li>

               <li className="footer__list-item">
                  <Link to={'/'} className="footer__list-link">Contact Us</Link>
               </li>

               <li className="footer__list-item">
                  <Link to={'/'} className="footer__list-link">Blog</Link>
               </li>

               <li className="footer__list-item">
                  <Link to={'/'} className="footer__list-link">FAQ</Link>
               </li>
            </ul>

            <ul className="footer__list">
               <li className="footer__list-item">Useful links</li>

               <li className="footer__list-item">
                  <Link to={'/'} className="footer__list-link">Terms & Conditions</Link>
               </li>

               <li className="footer__list-item">
                  <Link to={'/'} className="footer__list-link">Returns & Exchanges</Link>
               </li>

               <li className="footer__list-item">
                  <Link to={'/'} className="footer__list-link">Shipping & Delivery</Link>
               </li>

               <li className="footer__list-item">
                  <Link to={'/'} className="footer__list-link">Privacy Policy</Link>
               </li>
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
               <div className="footer__payments-item">
                  <img src={`${path}/images/footer_payments-1.png`} className="footer__payments-img" alt="payment"></img>
               </div>

               <div className="footer__payments-item">
                  <img src={`${path}/images/footer_payments-2.png`} className="footer__payments-img" alt="payment"></img>
               </div>

               <div className="footer__payments-item">
                  <img src={`${path}/images/footer_payments-3.png`} className="footer__payments-img" alt="payment"></img>
               </div>

               <div className="footer__payments-item">
                  <img src={`${path}/images/footer_payments-4.png`} className="footer__payments-img" alt="payment"></img>
               </div>

               <div className="footer__payments-item">
                  <img src={`${path}/images/footer_payments-5.png`} className="footer__payments-img" alt="payment"></img>
               </div>

               <div className="footer__payments-item">
                  <img src={`${path}/images/footer_payments-6.png`} className="footer__payments-img" alt="payment"></img>
               </div>

               <div className="footer__payments-item">
                  <img src={`${path}/images/footer_payments-7.png`} className="footer__payments-img" alt="payment"></img>
               </div>
            </div>

            <a className="footer__bottom-link">Clevertec.ru/training</a>
         </div>
      </footer>
   );
}

export default Footer;