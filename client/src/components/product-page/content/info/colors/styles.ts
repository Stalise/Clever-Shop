import Image from 'next/image';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    margin-bottom: 30px;
`;

export const Text = styled.div`
    margin-bottom: 15px;

    span {
        margin-right: 5px;
        color: var(--dark-grey);
        letter-spacing: 1px;
        text-transform: uppercase;
    }
`;

export const Images = styled.div`
    display: flex;

    div {
        max-width: 65px;
        max-height: 65px;
        cursor: pointer;

        &:not(:last-child) {
            margin-right: 15px;
        }
    }
`;

export const StyledImage = styled(Image)<{ $selected: boolean }>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    outline: ${({ $selected }) =>
        css`2px solid ${$selected ? 'black' : 'transparent'}`};
`;
