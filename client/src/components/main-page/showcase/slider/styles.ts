import Image from 'next/image';

import styled from 'styled-components';
import { Swiper } from 'swiper/react';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    width: 50%;
    padding-right: 15px;
`;

export const StyledSwiper = styled(Swiper)`
    .swiper-slide {
        position: relative;
        max-height: 490px;
    }
`;

export const Banner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 290px;
    height: 100px;
    letter-spacing: 0.06em;
    background-color: var(--light);
    border-radius: 4px;
    transform: translate(-50%, -50%);
`;

export const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const Title = styled.span`
    ${fontSpartan('s', '500')}

    margin-bottom: 10px;
    color: var(--dark-grey);
    text-transform: uppercase;
`;

export const Subtitle = styled.span`
    ${fontSpartan('xl', '600')}

    text-transform: uppercase;
`;
