import Image from 'next/image';
import Link from 'next/link';

import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    padding: 95px 15px;
`;

export const Container = styled.div`
    max-width: 1110px;
    margin: 0 auto;
`;

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 45px;
    letter-spacing: 0.6px;

    h3 {
        ${fontSpartan('2xl', '500')}

        text-transform: uppercase;
    }
`;

export const StyledLink = styled(Link)`
    ${fontSpartan('l')}

    color: var(--dark-grey);
    text-transform: uppercase;
    transition: 300ms;

    &:hover {
        transform: scale(0.9);
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Item = styled.div`
    position: relative;
    width: 100%;
    max-width: 350px;
    padding-bottom: 66px;

    &:not(:last-child) {
        margin-right: 30px;
    }

    div {
        position: absolute;
        bottom: 0;
        left: 50%;
        width: max-content;
        max-width: 80%;
        padding: 24px 16px 0;
        letter-spacing: 0.6px;
        background-color: var(--light);
        transform: translateX(-50%);

        span {
            ${fontSpartan('l', '500')}

            display: block;
            margin-bottom: 12px;
            text-transform: uppercase;
        }

        p {
            ${fontSpartan('l', '300')}
        }
    }
`;

export const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    max-height: 276px;
    object-fit: cover;
`;
