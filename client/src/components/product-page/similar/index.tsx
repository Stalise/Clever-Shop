import { FC } from 'react';

import { Autoplay } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';

import { productsMock } from 'data/products-mock';

import { Product } from 'components/common/product';

import { Container, StyledSwiper, Top, Wrapper } from './styles';

export const Similar: FC = () => (
    <Wrapper>
        <Container>
            <Top>
                <span>related products</span>
            </Top>
            <StyledSwiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={4}
                autoplay
                loop
                speed={3000}
            >
                {productsMock.men.map((item, index) => {
                    if (index < 6) {
                        return (
                            <SwiperSlide key={item.id}>
                                <Product data={item} />
                            </SwiperSlide>
                        );
                    }
                })}
            </StyledSwiper>
        </Container>
    </Wrapper>
);
