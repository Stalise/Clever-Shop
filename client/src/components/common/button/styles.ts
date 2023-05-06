import styled from 'styled-components';
import { flex, font } from 'styles/mixins';

import { IStyledButton } from './types';

export const StyledButton = styled.button`
    ${({ fontSize, fontWeight, lineHeight }: IStyledButton) =>
        font({
            lineHeight: lineHeight || '15px',
            size: fontSize || '13px',
            weight: fontWeight || 500,
        })};

    display: ${({ block }) => (block ? 'block' : flex({ justify: 'center' }))};
    width: 100%;
    min-width: 108px;
    max-width: ${({ width }) => width && `${width}px`};
    padding: ${({ padding }) => padding || '17px 0 16px'};
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
        background-color: var(--pink);
        border-radius: 57px;
    }
`;
