import { FC } from 'react';

import type SwiperCore from 'swiper';
import { Thumbs } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import type { CategoriesType, IImage } from 'types/common';

import { StyledImage, StyledSwiper, Wrapper } from './styles';

interface IProps {
    currentImages: IImage[];
    category: CategoriesType;
    setSlider: (slider: SwiperCore) => void;
}

export const Secondary: FC<IProps> = ({
    currentImages,
    category,
    setSlider,
}) => {
    const pathToImage = `${process.env.NEXT_PUBLIC_CLOUDINARY}${category}/`;

    return (
        <Wrapper>
            <StyledSwiper
                modules={[Thumbs]}
                direction='vertical'
                slidesPerView={4}
                spaceBetween={15}
                observer
                watchSlidesProgress
                onSwiper={setSlider}
            >
                {currentImages.map(({ id, url }) => (
                    <SwiperSlide key={id}>
                        <StyledImage
                            src={`${pathToImage}${url}`}
                            height={127}
                            width={95}
                            alt='product'
                        />
                    </SwiperSlide>
                ))}
            </StyledSwiper>
        </Wrapper>
    );
};
