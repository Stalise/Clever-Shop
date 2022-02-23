import { FC } from "react";
import { Navigation, Autoplay, Controller, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
// import 'swiper/scss/navigation';

interface IProps {
   setFirstSwiper: any
}

const SecondarySlider: FC<IProps> = ({ setFirstSwiper }) => {

   const path = process.env.REACT_APP_GITHUB_PATH

   return (
      <div className="product__secondary-slider secondary-slider" data-test-id={'related-slider'}>
         <Swiper
            modules={[Navigation, Autoplay, Controller, Thumbs]}
            navigation={{
               nextEl: '.btn-next',
               prevEl: '.btn-prev',
            }}
            watchSlidesProgress={true}
            direction="vertical"
            speed={1000}
            spaceBetween={15}
            slidesPerView={4}
            onSlideChange={() => console.log('change')}
            onSwiper={setFirstSwiper}
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
         </Swiper>
      </div >
   );
}

export default SecondarySlider;