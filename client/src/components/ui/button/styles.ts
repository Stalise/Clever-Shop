import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

import { dimensions, typography, views } from './config';
import type { IStyledProps } from './types';

export const Component = styled.button<IStyledProps>`
    ${({ $size }) =>
        fontSpartan(typography[$size].size, typography[$size].weight)};

    width: 100%;
    max-width: ${({ $block, $size }) =>
        $block ? '100%' : dimensions[$size].width};
    padding: ${({ $size }) => dimensions[$size].padding};
    color: ${({ $view }) => views[$view].color};
    letter-spacing: 1px;
    text-transform: uppercase;
    background-color: ${({ $view }) => views[$view].backgroundColor};
    border: ${({ $outline, $view }) =>
        $outline ? views[$view].outline : 'none'};
    transition: 500ms all ease;

    &:hover {
        color: ${({ $view }) => views[$view].hover.color};
        background-color: ${({ $view }) => views[$view].hover.backgroundColor};
    }

    &:active {
        color: ${({ $view }) => views[$view].active.color};
        background-color: ${({ $view }) => views[$view].active.backgroundColor};
    }

    &:disabled {
        color: ${({ $view }) => views[$view].disabled.color};
        border: ${({ $outline, $view }) =>
            $outline ? views[$view].disabled.outline : 'none'};
        pointer-events: none;
    }

    ${({ $styles }) => $styles}
`;
