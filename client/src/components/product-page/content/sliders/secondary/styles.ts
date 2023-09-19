import Image from 'next/image';

import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Wrapper = styled.div`
    width: 100%;
    min-width: 95px;
`;

export const StyledSwiper = styled(Swiper)`
    max-height: 555px;

    .swiper-slide {
        cursor: pointer;
        opacity: 0.3;
        transition: 500ms opacity;
    }

    .swiper-slide-thumb-active {
        opacity: 1;
    }
`;

export const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
