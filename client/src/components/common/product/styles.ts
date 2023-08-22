import Image from 'next/image';
import Link from 'next/link';

import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const StyledLink = styled(Link)`
    max-width: 255px;
`;

export const Container = styled.div`
    position: relative;
    margin-bottom: 15px;

    div {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 8px 8px;
        background-color: var(--pink);

        span {
            ${fontSpartan('m', '500')}

            color: var(--light);
            letter-spacing: 0.6px;
        }
    }
`;

export const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    max-height: 365px;
    object-fit: contain;
`;

export const Title = styled.span`
    ${fontSpartan('xl', '200')}

    display: block;
    margin-bottom: 15px;
    color: var(--dark-grey);
    letter-spacing: 1.6px;
`;

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Price = styled.div`
    span {
        &:first-child {
            ${fontSpartan('xl', '500')}

            margin-right: 5px;
            color: var(--dark);
        }

        &:nth-child(n + 2) {
            ${fontSpartan('l', '500')}

            color: var(--dark-grey);
            text-decoration: line-through;
        }
    }
`;
