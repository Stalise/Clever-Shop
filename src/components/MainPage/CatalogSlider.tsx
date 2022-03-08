import { FC } from "react";
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';


const CatalogSlider: FC = () => {

   const path = process.env.REACT_APP_GITHUB_PATH

   return (
      <div className="catalog__slider" data-test-id={'main-slider'}>
         <Swiper
            modules={[Navigation, Autoplay]}
            // navigation={{
            //    nextEl: '.btn-next',
            //    prevEl: '.btn-prev',
            // }}
            navigation
            loop={true}
            autoplay={{ delay: 5000 }}
            speed={1000}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => null}
            onSwiper={(swiper) => null}
         >
            <SwiperSlide className="swiper-slide">
               <img className="swiper-slide__img" src={`${path}/images/slider_image.jpg`} alt="girl"></img>
               <div className="swiper-slide__banner">
                  <p className="swiper-slide__title">Banner</p>
                  <p className="swiper-slide__subtle">Your title text</p>
               </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
               <img className="swiper-slide__img" src={`${path}/images/slider_image.jpg`} alt="girl"></img>
               <div className="swiper-slide__banner">
                  <p className="swiper-slide__title">Clevertec</p>
                  <p className="swiper-slide__subtle">Your title text</p>
               </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
               <img className="swiper-slide__img" src={`${path}/images/slider_image.jpg`} alt="girl"></img>
               <div className="swiper-slide__banner">
                  <p className="swiper-slide__title">Banner</p>
                  <p className="swiper-slide__subtle">Your title text</p>
               </div>
            </SwiperSlide>

            <div className="btn-container">
               <div className="btn-prev"></div>
               <div className="btn-next"></div>
            </div>
         </Swiper>
      </div>
   );
}

export default CatalogSlider;