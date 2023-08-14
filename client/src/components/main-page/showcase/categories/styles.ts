import Image from 'next/image';
import Link from 'next/link';

import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

interface IBannerProps {
    bannerWidth: '50%' | '100%';
    bannerHeight: '200px' | '260px';
}

export const Wrapper = styled.div`
    width: 50%;
    padding-left: 15px;
`;

export const Top = styled.div`
    display: flex;
    margin-bottom: 30px;
`;

export const Banner = styled.div<IBannerProps>`
    position: relative;
    width: ${({ bannerWidth }) => bannerWidth};
    max-height: ${({ bannerHeight }) => bannerHeight};
    overflow: hidden;

    &:first-child {
        margin-right: 30px;
    }
`;

export const StyledLink = styled(Link)<{ $maxWidth: string }>`
    ${fontSpartan('m', '600')}

    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: ${({ $maxWidth }) => $maxWidth};
    height: 45px;
    color: var(--dark);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    background-color: var(--light);
    border-radius: 4px;
    transform: translate(-50%, -50%);
    transition: 300ms;

    &:hover {
        background-color: var(--light-08);
    }
`;

export const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
