import './ProductPage.scss';
import { FC, useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { IProductsItem } from '../../types/typesProductsItem';
import { fakeDataProducts } from '../../tempProducts';
import ProductSliders from '../../components/ProductPage/ProductSliders';
import SimilarSlider from '../../components/ProductPage/SimilarSlideer';

const ProductPage: FC = () => {

   const path = process.env.REACT_APP_GITHUB_PATH
   const [currentProduct, setCurrentProduct] = useState<IProductsItem>()

   const params = useParams()
   const getProducts: IProductsItem[] = fakeDataProducts[params.category as keyof typeof fakeDataProducts]

   //id объекта минус 1, для поиска товара в массиве с нулевого индекса
   const idProduct = Number(params.id) - 1

   useEffect(() => {
      setCurrentProduct(getProducts[idProduct])
   }, [currentProduct])

   return (
      <div className="product-page" data-test-id={`product-page-${params.category}`}>
         <section className="introduction">
            <div className="introduction__container">
               <div className="introduction__top">
                  <nav className="breadcrumbs">
                     <ul className="breadcrumbs__list">
                        <li className="breadcrumbs__item"><Link to={'/'} className="breadcrumbs__link">Home</Link></li>
                        <li className="breadcrumbs__item"><Link to={`/category/${params.category}`} className="breadcrumbs__link">{params.category}</Link></li>
                        <li className="breadcrumbs__item breadcrumbs__item-now">{currentProduct?.name}</li>
                     </ul>
                  </nav>

                  <button className="introduction__share">Share</button>
               </div>

               <p className="introduction__title">{currentProduct?.name}</p>

               <div className="introduction__bottom">
                  <div className="introduction__rating">
                     <img src={`${path}/images/rating.png`} className="introduction__rating-img" alt="rating"></img>
                     <a href="#!" className="introduction__reviews">2 Reviews</a>
                  </div>

                  <div className="introduction__info">
                     <p className="introduction__info-item">SKU: <span>777</span></p>
                     <p className="introduction__info-item">Availability: <span>In Stock</span></p>
                  </div>
               </div>
            </div>
         </section>

         <section className="product">
            <div className="product__container">
               <ProductSliders />

               <div className="product__content">
                  <div className="product__tabs">
                     <div className="product__tabs-color tabs-color">
                        <p className="tabs-color__text">COLOR: <span>Blue</span> </p>

                        <div className="tabs-color__content">
                           <div className="tabs-color__item">
                              <img className="tabs-color__item-img" src={`${path}/images/product-slider_img-1.jpg`} alt="wear"></img>
                           </div>

                           <div className="tabs-color__item">
                              <img className="tabs-color__item-img" src={`${path}/images/product_tab-1.jpg`} alt="wear"></img>
                           </div>

                           <div className="tabs-color__item">
                              <img className="tabs-color__item-img" src={`${path}/images/product_tab-2.jpg`} alt="wear"></img>
                           </div>

                           <div className="tabs-color__item">
                              <img className="tabs-color__item-img" src={`${path}/images/product_tab-3.jpg`} alt="wear"></img>
                           </div>
                        </div>
                     </div>

                     <div className="product__tabs-size tabs-size">
                        <p className="tabs-size__text">SIZE: <span>Blue</span> </p>

                        <div className="tabs-size__content">
                           <button type="button" className="tabs-size__button-size">XS</button>
                           <button type="button" className="tabs-size__button-size">S</button>
                           <button type="button" className="tabs-size__button-size">M</button>
                           <button type="button" className="tabs-size__button-size">L</button>
                        </div>

                        <button className="tabs-size__button-check">Size guide</button>
                     </div>
                  </div>

                  <div className="product__actions">
                     <p className="product__price">$ 379.99</p>
                     <button className="product__button-cart" type="button">ADD TO CART</button>
                     <button className="product__button-favourites" type="button"></button>
                     <button className="product__button-compare" type="button"></button>
                  </div>

                  <div className="product__info product-info">
                     <div className="product-info__features">
                        <p className="product-info__features-item">Shipping & Delivery</p>
                        <p className="product-info__features-item">Returns & Exchanges</p>
                        <p className="product-info__features-item">Ask a question</p>
                     </div>

                     <div className="product-info__payments">
                        <div className="product-info__payments-text">
                           <p className="product-info__payments-title">guaranteed safe checkout</p>
                           <div className="product-info__payments-line"></div>
                        </div>

                        <div className="product-info__payments-content">
                           <div className="product-info__payments-item">
                              <img className="product-info__payments-img" src={`${path}/images/payments-colorful_1.png`} alt="payment"></img>
                           </div>

                           <div className="product-info__payments-item">
                              <img className="product-info__payments-img" src={`${path}/images/payments-colorful_2.png`} alt="payment"></img>
                           </div>

                           <div className="product-info__payments-item">
                              <img className="product-info__payments-img" src={`${path}/images/payments-colorful_3.png`} alt="payment"></img>
                           </div>

                           <div className="product-info__payments-item">
                              <img className="product-info__payments-img" src={`${path}/images/payments-colorful_4.png`} alt="payment"></img>
                           </div>

                           <div className="product-info__payments-item">
                              <img className="product-info__payments-img" src={`${path}/images/payments-colorful_5.png`} alt="payment"></img>
                           </div>

                           <div className="product-info__payments-item">
                              <img className="product-info__payments-img" src={`${path}/images/payments-colorful_6.png`} alt="payment"></img>
                           </div>

                           <div className="product-info__payments-item">
                              <img className="product-info__payments-img" src={`${path}/images/payments-colorful_7.png`} alt="payment"></img>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="product__description">
                     <p className="product__description-text">Description</p>
                  </div>

                  <div className="product__available">
                     <p className="product__available-title">ADDITIONAL INFORMATION</p>

                     <ul className="product__available-list">
                        <li className="product__available-item">
                           Color: <span>Blue, White, Black, Grey</span>
                        </li>

                        <li className="product__available-item">
                           Size: <span>XS, S, M, L</span>
                        </li>

                        <li className="product__available-item">
                           Material: <span>100% Polyester</span>
                        </li>
                     </ul>
                  </div>

                  <div className="product__reviews">
                     <p className="product__reviews-title">Reviews</p>

                     <div className="product__reviews-actions reviews-actions">
                        <div className="reviews-actions__rating">
                           <img className="reviews-actions__rating-img" src={`${path}/images/rating.png`} alt="rating"></img>
                           <a href="#!" className="reviews-actions__rating-title">2 reviews</a>
                        </div>

                        <p className="reviews-actions__message">Write a review</p>
                     </div>

                     <div className="product__reviews-content">
                        <div className="product__reviews-item reviews-item">
                           <div className="reviews-item__top">
                              <p className="reviews-item__name">Oleh Chabanov</p>

                              <div className="reviews-item__info">
                                 <p className="reviews-item__date">3 months ago</p>
                                 <img className="reviews-item__img" src={`${path}/images/rating.png`} alt="rating"></img>
                              </div>
                           </div>

                           <p className="reviews-item__text">On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
                        </div>

                        <div className="product__reviews-item reviews-item">
                           <div className="reviews-item__top">
                              <p className="reviews-item__name">Max Podolski</p>

                              <div className="reviews-item__info">
                                 <p className="reviews-item__date">2 months ago</p>
                                 <img className="reviews-item__img" src={`${path}/images/rating.png`} alt="rating"></img>
                              </div>
                           </div>

                           <p className="reviews-item__text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="similar">
            <div className="similar__container">
               <div className="similar__top">
                  <p className="similar__title">RELATED PRODUCTS</p>
                  <div className="btn-similar-container">
                     <div className="btn-similar-prev"></div>
                     <div className="btn-similar-next"></div>
                  </div>
               </div>

               <SimilarSlider
                  getProducts={getProducts}
                  params={params}
               />
            </div>
         </section>
      </div>
   );
}

export default ProductPage;