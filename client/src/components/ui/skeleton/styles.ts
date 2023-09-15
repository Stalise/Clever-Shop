import styled from 'styled-components';

import { IStyledProps } from './types';

export const Wrapper = styled.div<IStyledProps>`
    border-radius: 5px;
    animation: skeleton-loading 1.2s linear infinite alternate;

    @keyframes skeleton-loading {
        0% {
            background-color: var(--grey);
        }

        100% {
            background-color: var(--light);
        }
    }

    ${({ $styles }) => $styles}
`;
