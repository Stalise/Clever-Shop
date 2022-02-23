import { FC } from "react";
import { Navigation, Autoplay, Controller, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
// import 'swiper/scss/navigation';

interface IProps {
   firstSwiper: any
}

const MainSlider: FC<IProps> = ({ firstSwiper }) => {

   const path = process.env.REACT_APP_GITHUB_PATH

   return (
      <div className="product__main-slider main-slider">
         <Swiper
            modules={[Navigation, Autoplay, Controller, Thumbs]}
            // navigation
            navigation={{
               nextEl: '.btn-next',
               prevEl: '.btn-prev',
            }}
            speed={1000}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            thumbs={{ swiper: firstSwiper }}
         >
            <SwiperSlide className="swiper-slide">
               <img className="swiper-slide__img" src={`${path}/images/product-slider_img-1.jpg`} alt="product"></img>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
               <img className="swiper-slide__img" src={`${path}/images/product-slider_img-1.jpg`} alt="product"></img>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
               <img className="swiper-slide__img" src={`${path}/images/product-slider_img-1.jpg`} alt="product"></img>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
               <img className="swiper-slide__img" src={`${path}/images/product-slider_img-1.jpg`} alt="product"></img>
            </SwiperSlide>

            <div className="btn-container">
               <div className="btn-prev"></div>
               <div className="btn-next"></div>
            </div>

            <div className="btn-container btn-container--two">
               <div className="btn-prev btn-prev--two"></div>
               <div className="btn-next btn-next--two"></div>
            </div>
         </Swiper>
      </div>
   );
}

export default MainSlider;