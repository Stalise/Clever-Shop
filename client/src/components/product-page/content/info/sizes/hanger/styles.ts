import Image from 'next/image';

import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    transition: 300ms;

    &:hover {
        transform: scale(0.9);
    }

    span {
        ${fontSpartan('m', '300')}

        margin-left: 5px;
        color: var(--dark-grey);
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        ${fontSpartan('2xl', '500')}

        margin-bottom: 10px;
    }
`;

export const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    max-height: 365px;
    object-fit: contain;
`;
