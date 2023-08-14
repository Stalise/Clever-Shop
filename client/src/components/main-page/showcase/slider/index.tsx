import { FC } from 'react';

import { SwiperSlide } from 'swiper/react';

import bannerPicture from '../../../../../public/static/banner.jpg';

import {
    Banner,
    StyledImage,
    StyledSwiper,
    Subtitle,
    Title,
    Wrapper,
} from './styles';

import 'swiper/css';

export const Slider: FC = () => (
    <Wrapper>
        <StyledSwiper
            slidesPerView={1}
            spaceBetween={0}
            autoplay={true}
            loop={true}
            speed={1000}
        >
            {[1, 2, 3].map((item) => (
                <SwiperSlide key={item}>
                    <StyledImage
                        src={bannerPicture}
                        priority
                        width={540}
                        height={490}
                        placeholder='blur'
                        alt='shop banner'
                    />
                    <Banner>
                        <Title>Banner</Title>
                        <Subtitle>Your title text</Subtitle>
                    </Banner>
                </SwiperSlide>
            ))}
        </StyledSwiper>
    </Wrapper>
);
