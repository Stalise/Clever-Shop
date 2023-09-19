import { FC } from 'react';

import type SwiperCore from 'swiper';
import { Thumbs } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import type { CategoriesType, IImage } from 'types/common';

import { StyledImage, StyledSwiper, Wrapper } from './styles';

interface IProps {
    currentImages: IImage[];
    category: CategoriesType;
    slider: SwiperCore | null;
}

export const Main: FC<IProps> = ({ currentImages, category, slider }) => {
    const pathToImage = `${process.env.NEXT_PUBLIC_CLOUDINARY}${category}/`;

    return (
        <Wrapper>
            <StyledSwiper
                modules={[Thumbs]}
                slidesPerView={1}
                spaceBetween={15}
                speed={1000}
                watchSlidesProgress
                observer
                thumbs={{ swiper: slider }}
            >
                {currentImages.map(({ id, url }) => (
                    <SwiperSlide key={id}>
                        <StyledImage
                            src={`${pathToImage}${url}`}
                            height={555}
                            width={390}
                            alt='product'
                        />
                    </SwiperSlide>
                ))}
            </StyledSwiper>
        </Wrapper>
    );
};
