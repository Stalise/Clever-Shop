import { FC, useEffect } from "react";
import { Navigation, Autoplay, Controller, Thumbs } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/scss';
// import 'swiper/scss/navigation';

interface IProps {
   sortedImages: IImages[]
   mainSlider: any,
   setMainSlider: any,
   setSecondarySlider: any,
   secondarySlider: any,
}

interface IImages {
   color: string,
   url: string,
   id: string,
}

const MainSlider: FC<IProps> = ({ sortedImages, mainSlider, secondarySlider, setMainSlider }) => {

   return (
      <div className="product__main-slider main-slider">
         <Swiper
            modules={[Navigation, Autoplay, Controller, Thumbs]}
            navigation={{
               nextEl: '.btn-next',
               prevEl: '.btn-prev',
            }}
            speed={1000}
            spaceBetween={0}
            slidesPerView={1}
            watchSlidesProgress
            observer={true}
            onSwiper={setMainSlider}
            // controller={{ control: secondarySlider }}
            thumbs={{ swiper: secondarySlider }}
         >

            {sortedImages.map((elem, index) => {

               return (
                  <SwiperSlide className="swiper-slide" key={elem.id}>
                     <img className="swiper-slide__img" src={`https://training.cleverland.by/shop${elem.url}`} alt="product"></img>
                  </SwiperSlide>
               )
            })}

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