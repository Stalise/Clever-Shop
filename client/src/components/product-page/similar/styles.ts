import styled from 'styled-components';
import { Swiper } from 'swiper/react';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    margin-bottom: 95px;
    padding: 0 15px;
`;

export const Container = styled.div`
    max-width: 1110px;
    margin: 0 auto;
`;

export const Top = styled.div`
    margin-bottom: 45px;

    span {
        ${fontSpartan('2xl', '500')}

        letter-spacing: 0.6px;
        text-transform: uppercase;
    }
`;

export const StyledSwiper = styled(Swiper)`
    .swiper-slide {
        cursor: grab;
    }
`;
