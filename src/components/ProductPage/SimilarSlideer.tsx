import { FC } from "react";
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import { IProductsItem } from '../../types/typesProductsItem';
import ProductItem from '../Common/ProductItem/ProductItem';

interface IParams {
   category?: string,
   id?: string
}

interface IProps {
   getProducts: IProductsItem[],
   params: IParams
}

const SimilarSlider: FC<IProps> = ({ getProducts, params }) => {

   console.log(params)

   const path = process.env.REACT_APP_GITHUB_PATH

   return (
      <div className="similar__content">
         <Swiper
            modules={[Navigation, Autoplay]}
            // navigation
            navigation={{
               nextEl: '.btn-similar-next',
               prevEl: '.btn-similar-prev',
            }}
            speed={1000}
            spaceBetween={20}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
               900: {
                  slidesPerView: 4
               },
               630: {
                  slidesPerView: 3
               },
               450: {
                  slidesPerView: 2
               },
               360: {
                  slidesPerView: 1
               }
            }}
         >

            {
               getProducts.map((elem, index) => {
                  if (index < 8) {
                     return (
                        <SwiperSlide className="swiper-slide" key={elem.id}>
                           <ProductItem dataProduct={elem} category={params.category ?? ''} />
                        </SwiperSlide>
                     )
                  }
               })
            }
         </Swiper>
      </div>
   );
}

export default SimilarSlider;