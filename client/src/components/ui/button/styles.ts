import styled from 'styled-components';
import { font } from 'styles/mixins';

import { paddings, widths } from './config';
import { IStyledButton } from './types';

export const StyledButton = styled.button`
    ${({ fontSize, fontWeight, lineHeight }: IStyledButton) =>
        font({
            lineHeight: lineHeight || 15,
            size: fontSize || 13,
            weight: fontWeight || 500,
        })};

    display: ${({ block }) => (block ? 'block' : 'flex')};
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 108px;
    max-width: ${({ block, size }) => (block ? 'none' : size && widths[size])};
    padding: ${({ size }) => (size ? paddings[size] : paddings['s'])};
    color: ${({ buttonTheme }) =>
        buttonTheme === 'light' ? 'var(--dark)' : 'var(--white)'};
    text-transform: uppercase;
    background-color: ${({ buttonTheme }) =>
        buttonTheme === 'light' ? 'var(--gr-white)' : 'var(--dark)'};
    border: ${({ outline }) => (outline ? '1px solid var(--white)' : 'none')};
    transition: 0.5s all ease;

    &:hover {
        color: var(--dark);
        background-color: var(--grey);
    }

    &:active {
        color: var(--white);
        background-color: var(--dark-grey);
    }
`;
