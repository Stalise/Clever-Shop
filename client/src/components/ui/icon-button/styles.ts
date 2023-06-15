import styled from 'styled-components';

import { dimensions } from './config';
import type { IStyledProps } from './types';

export const Component = styled.button<IStyledProps>`
    width: ${({ size }) => dimensions[size].width};
    height: ${({ size }) => dimensions[size].height};
    background-color: transparent;
    transition: 0.3s;

    &:hover {
        transform: scale(0.9);
    }

    & > svg {
        transition: 0.3s;
        stroke-width: ${({ view, isActive }) =>
            view === 'accent' && isActive ? 2 : 1};
    }

    ${({ styles }) => styles}
`;
