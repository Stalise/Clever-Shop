import { FC } from 'react';
import { Link } from 'react-router-dom';
import './MainPage.scss';
import CatalogSlider from '../../components/MainPage/CatalogSlider';
import ProductsContainer from '../../components/MainPage/ProductsContainer';
import EmailForm from '../../components/MainPage/EmailForm';

const MainPage: FC = () => {

   const path = process.env.REACT_APP_GITHUB_PATH

   return (
      <div className="main-page" data-test-id='app'>
         <section className="catalog">
            <div className="catalog__container">
               <CatalogSlider />

               <div className="catalog__products catalog-products">
                  <div className="catalog-products__top">
                     <div className="catalog-products__item">
                        <img className="catalog-products__item-img" src={`${path}/images/catalog_girl.jpg`} alt="products"></img>
                        <Link to={'/category/women'} className="catalog-products__item-button" type="button">WOMEN</Link>
                     </div>
                     <div className="catalog-products__item">
                        <img className="catalog-products__item-img" src={`${path}/images/catalog_man.jpg`} alt="products"></img>
                        <Link to={'/category/men'} className="catalog-products__item-button" type="button">MEN</Link>
                     </div>
                  </div>
                  <div className="catalog-products__bottom">
                     <div className="catalog-products__item">
                        <img className="catalog-products__item-img" src={`${path}/images/catalog_bag.jpg`} alt="products"></img>
                        <button className="catalog-products__item-button" type="button">ACCESSORIES</button>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="advantages">
            <div className="advantages__container">
               <div className="advantages__item">
                  <img className="advantages__img" src={`${path}/images/advantages_img-1.png`} alt="logo_img"></img>
                  <div className="advantages__text">
                     <p className="advantages__title">FREE SHIPPING</p>
                     <p className="advantages__subtitle">On all UA order or order above $100</p>
                  </div>
               </div>

               <div className="advantages__item">
                  <img className="advantages__img" src={`${path}/images/advantages_img-2.png`} alt="logo_img"></img>
                  <div className="advantages__text">
                     <p className="advantages__title">30 DAYS RETURN</p>
                     <p className="advantages__subtitle">Simply return it within 30 days for an exchange</p>
                  </div>
               </div>

               <div className="advantages__item">
                  <img className="advantages__img" src={`${path}/images/advantages_img-3.png`} alt="logo_img"></img>
                  <div className="advantages__text">
                     <p className="advantages__title">SUPPORT 24/7</p>
                     <p className="advantages__subtitle">Contact us 24 hours a day, 7 days a week</p>
                  </div>
               </div>
            </div>
         </section>

         <ProductsContainer
            dataTestId={'clothes-women'}
            title={'WOMEN’S'}
            category={'women'}
         />

         <ProductsContainer
            dataTestId={'clothes-men'}
            title={'MEN’S'}
            category={'men'}
         />

         <section className="news">
            <div className="news__container">
               <div className="news__item news-item">
                  <div className="news-item__img-container">
                     <img className="news-item__img" src={`${path}/images/news_item-1.jpg`} alt="news"></img>
                  </div>
                  <div className="news-item__button">
                     <p className="news-item__button-title">New Season</p>
                     <p className="news-item__button-subtitle">lookbook collection</p>
                  </div>
               </div>

               <div className="news__item news-item">
                  <div className="news-item__img-container">
                     <img className="news-item__img" src={`${path}/images/news_item-2.jpg`} alt="news"></img>
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
                  <EmailForm />
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