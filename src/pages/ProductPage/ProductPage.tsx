import './ProductPage.scss';
import { FC, useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { IProductsItem } from '../../types/productsItem';
import { dataProducts } from '../../products';
import ProductSliders from '../../components/ProductPage/ProductSliders';
import SimilarSlider from '../../components/ProductPage/SimilarSlideer';
import Sizes from '../../components/ProductPage/Sizes';
import Colors from '../../components/ProductPage/Colors';
import Rating from '../../components/Common/Rating/Rating';
import Reviews from '../../components/ProductPage/Reviews';
import Actions from '../../components/ProductPage/Actions';

export interface ICurrentParams {
   color: string,
   size: string
}

const ProductPage: FC = () => {

   const path = process.env.REACT_APP_GITHUB_PATH
   const [currentProduct, setCurrentProduct] = useState<IProductsItem>()
   // const [currentColor, setCurrentColor] = useState<string>('')
   const [currentParams, setCurrentParams] = useState<ICurrentParams>({
      color: '',
      size: '',
   })

   const params = useParams()
   const getProducts: IProductsItem[] = dataProducts[params.category as keyof typeof dataProducts]

   useEffect(() => {
      // фильтруем массив с товарами для получения текущего при didMount
      const currentProduct = getProducts.filter((elem) => elem.id === params.id)[0]
      setCurrentProduct(currentProduct)

      // устанавливаем дефолтный цвет и размер для картинок в продукте при смене или 1 загрузке
      setCurrentParams({
         ...currentParams,
         color: currentProduct.images[0].color,
         size: currentProduct.sizes[0]
      })
   }, [params])

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
                     <Rating
                        rating={currentProduct?.reviews ? currentProduct?.reviews.reduce((t, e, i, a) => (t += e.rating), 0) / currentProduct?.reviews.length : 0}
                     />
                     <a href="#!" className="introduction__reviews">{currentProduct?.reviews ? currentProduct?.reviews.length : 0} Reviews</a>
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
               {currentParams.color.length > 0 && currentProduct && <ProductSliders currentParams={currentParams} currentProduct={currentProduct} />}

               <div className="product__content">
                  <div className="product__tabs">
                     <Colors
                        images={currentProduct?.images}
                        currentParams={currentParams}
                        setCurrentParams={setCurrentParams}
                     />

                     <Sizes
                        sizesList={currentProduct?.sizes}
                        currentParams={currentParams}
                        setCurrentParams={setCurrentParams}
                     />
                  </div>

                  {currentProduct &&
                     <Actions
                        currentProduct={currentProduct}
                        currentParams={currentParams}
                     />}

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
                           Color: <span>{new Set(currentProduct?.images.map((elem) => elem.color + '. '))}</span>
                        </li>

                        <li className="product__available-item">
                           Size: <span>{currentProduct?.sizes.map((elem, index, arr) => index < (arr.length - 1) ? elem + ', ' : elem)}</span>
                        </li>

                        <li className="product__available-item">
                           Material: <span>{currentProduct?.material}</span>
                        </li>
                     </ul>
                  </div>

                  <Reviews currentProduct={currentProduct} />
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