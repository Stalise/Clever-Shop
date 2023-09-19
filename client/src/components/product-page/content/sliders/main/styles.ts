import Image from 'next/image';

import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 455px;
    padding-left: 15px;
`;

export const StyledSwiper = styled(Swiper)`
    max-height: 555px;

    .swiper-slide {
        cursor: grab;
    }
`;

export const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
