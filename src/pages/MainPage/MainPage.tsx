import { FC } from 'react';
import './MainPage.scss';
import ProductsItems from '../../components/Common/ProductItems/ProductsItems';

const MainPage: FC = () => {

   return (
      <div className="main-page" data-test-id='app'>
         <section className="catalog">
            <div className="catalog__container">
               <div className="catalog__slider">
                  <img className="catalog__slider-img" src="./images/slider_image.jpg" alt="girl"></img>
               </div>

               <div className="catalog__products catalog-products">
                  <div className="catalog-products__top">
                     <div className="catalog-products__item">
                        <img className="catalog-products__item-img" src="./images/catalog_girl.jpg" alt="products"></img>
                        <button className="catalog-products__item-button" type="button">WOMEN</button>
                     </div>
                     <div className="catalog-products__item">
                        <img className="catalog-products__item-img" src="images/catalog_man.jpg" alt="products"></img>
                        <button className="catalog-products__item-button" type="button">MEN</button>
                     </div>
                  </div>
                  <div className="catalog-products__bottom">
                     <div className="catalog-products__item">
                        <img className="catalog-products__item-img" src="images/catalog_bag.jpg" alt="products"></img>
                        <button className="catalog-products__item-button" type="button">ACCESSORIES</button>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="advantages">
            <div className="advantages__container">
               <div className="advantages__item">
                  <img className="advantages__img" src="images/advantages_img-1.png" alt="logo_img"></img>
                  <div className="advantages__text">
                     <p className="advantages__title">FREE SHIPPING</p>
                     <p className="advantages__subtitle">On all UA order or order above $100</p>
                  </div>
               </div>

               <div className="advantages__item">
                  <img className="advantages__img" src="images/advantages_img-2.png" alt="logo_img"></img>
                  <div className="advantages__text">
                     <p className="advantages__title">30 DAYS RETURN</p>
                     <p className="advantages__subtitle">Simply return it within 30 days for an exchange</p>
                  </div>
               </div>

               <div className="advantages__item">
                  <img className="advantages__img" src="images/advantages_img-3.png" alt="logo_img"></img>
                  <div className="advantages__text">
                     <p className="advantages__title">SUPPORT 24/7</p>
                     <p className="advantages__subtitle">Contact us 24 hours a day, 7 days a week</p>
                  </div>
               </div>
            </div>
         </section>

         <section className="products" data-test-id={`clothes-women`}>
            <div className="products__container">
               <div className="products__top">
                  <p className="products__title">MEN’S</p>
                  <div className="products__tabs">
                     <ul className="products__tabs-list">
                        <li className="products__tabs-item">NEW ARRIVALS</li>
                        <li className="products__tabs-item">SPECIALS</li>
                        <li className="products__tabs-item">BESTSELLERS</li>
                        <li className="products__tabs-item">MOST VIEWED</li>
                        <li className="products__tabs-item">FEATURED PRODUCTS</li>
                     </ul>
                  </div>
               </div>

               <ProductsItems
                  category={'women'}
               />

               <div className="products__bottom">
                  <a href="!#" className="products__bottom-button">SEE ALL</a>
               </div>
            </div>
         </section>

         <section className="products" data-test-id={`clothes-men`}>
            <div className="products__container">
               <div className="products__top">
                  <p className="products__title">MEN’S</p>
                  <div className="products__tabs">
                     <ul className="products__tabs-list">
                        <li className="products__tabs-item">NEW ARRIVALS</li>
                        <li className="products__tabs-item">SPECIALS</li>
                        <li className="products__tabs-item">BESTSELLERS</li>
                        <li className="products__tabs-item">MOST VIEWED</li>
                        <li className="products__tabs-item">FEATURED PRODUCTS</li>
                     </ul>
                  </div>
               </div>

               <ProductsItems
                  category={'men'}
               />

               <div className="products__bottom">
                  <a href="!#" className="products__bottom-button">SEE ALL</a>
               </div>
            </div>
         </section>

         <section className="news">
            <div className="news__container">
               <div className="news__item news-item">
                  <div className="news-item__img-container">
                     <img className="news-item__img" src="images/news_item-1.jpg" alt="news"></img>
                  </div>
                  <div className="news-item__button">
                     <p className="news-item__button-title">New Season</p>
                     <p className="news-item__button-subtitle">lookbook collection</p>
                  </div>
               </div>

               <div className="news__item news-item">
                  <div className="news-item__img-container">
                     <img className="news-item__img" src="images/news_item-2.jpg" alt="news"></img>
                  </div>
                  <div className="news-item__button">
                     <p className="news-item__button-title">Sale</p>
                     <p className="news-item__button-subtitle">Get UP to <span>50% off</span></p>
                  </div>
               </div>
            </div>
         </section>

         <section className="subscribe">
            <div className="subscribe__container">
               <div className="subscribe__content">
                  <div className="subscribe__text">
                     <p className="subscribe__title">Special Offer</p>
                     <p className="subscribe__subtitle">Subscribe <br></br> And <span>Get 10% Off</span></p>
                  </div>
                  <form className="subscribe__form">
                     <input className="subscribe__input-email" placeholder="Enter your email"></input>
                     <button type="button" className="subscribe__button">Subscribe</button>
                  </form>
               </div>
            </div>
         </section >

         <section className="blog">
            <div className="blog__container">
               <div className="blog__top">
                  <p className="blog__title">LATEST FROM BLOG</p>
                  <a href="#!" className="blog__link">See all</a>
               </div>

               <div className="blog__content">
                  <div className="blog__item blog-item">
                     <div className="blog-item__text">
                        <p className="blog-item__title">The Easiest Way to Break</p>
                        <p className="blog-item__subtitle">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                     </div>
                  </div>

                  <div className="blog__item blog-item">
                     <div className="blog-item__text">
                        <p className="blog-item__title">Wedding Season</p>
                        <p className="blog-item__subtitle">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                     </div>
                  </div>

                  <div className="blog__item blog-item">
                     <div className="blog-item__text">
                        <p className="blog-item__title">Recent Favorites On Repeat</p>
                        <p className="blog-item__subtitle">But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div >
   );
}

export default MainPage;