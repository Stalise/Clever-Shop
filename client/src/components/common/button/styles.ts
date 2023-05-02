import styled from 'styled-components';
import { flex, font } from 'styles/mixins';

import { IStyledButton } from './types';

export const StyledButton = styled.button`
    ${(props: IStyledButton) =>
        font({
            lineHeight: props.lineHeight || '15px',
            size: props.fontSize || '13px',
            weight: props.fontWeight || 500,
        })};

    ${flex({ justify: 'center' })};

    width: ${(props) => `${props.width}px` || '184px'};
    padding: 17px 0 16px;
    color: ${(props) =>
        props.buttonTheme === 'light' ? 'var(--dark)' : 'var(--white)'};
    text-transform: uppercase;
    background-color: ${(props) =>
        props.buttonTheme === 'light' ? 'var(--gr-white)' : 'var(--dark)'};
    border: ${(props) => (props.outline ? '1px solid var(--white)' : 'none')};
    opacity: 0.9;
    transition: 0.5s all ease;

    &:active {
        color: var(--white);
        background-color: var(--dark-grey);
    }

    &:hover {
        color: var(--dark);
        background-color: var(--grey);
    }
`;
