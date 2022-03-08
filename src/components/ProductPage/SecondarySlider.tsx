import { FC, useEffect, useRef } from "react";
import { Navigation, Autoplay, Controller, Thumbs } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/scss';
// import 'swiper/scss/navigation';

interface IProps {
   sortedImages: IImages[],
   secondarySlider: any,
   setMainSlider: any,
   mainSlider: any,
   setSecondarySlider: any,
}

interface IImages {
   color: string,
   url: string,
   id: string,
}

const SecondarySlider: FC<IProps> = ({ sortedImages, secondarySlider, mainSlider, setMainSlider, setSecondarySlider }) => {

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
            observer={true}
            onSwiper={setSecondarySlider}
         // controller={{ control: mainSlider }}
         >
            {sortedImages.map((elem, index) => {
               return (
                  <SwiperSlide className={`swiper-slide`} key={elem.id}>
                     <img className="swiper-slide__img" src={`https://training.cleverland.by/shop${elem.url}`} alt="product"></img>
                  </SwiperSlide>
               )
            })}

            <div className="btn-container">
               <div className="btn-prev"></div>
               <div className="btn-next"></div>
            </div>
         </Swiper>
      </div >
   );
}

export default SecondarySlider;