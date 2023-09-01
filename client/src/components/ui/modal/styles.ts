import styled, { css } from 'styled-components';

import { dimensions } from './config';
import { IContentProps, IWrapperProps } from './types';

export const Wrapper = styled.div<IWrapperProps>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: #0033;
    opacity: 0;
    transition: opacity 300ms;

    ${({ $isShow }) =>
        $isShow &&
        css`
            opacity: 1;
        `}
`;

export const Container = styled.div`
    background-color: var(--light);
    border-radius: 5px;
`;

export const Close = styled.div`
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid var(--light-grey);
`;

export const Content = styled.div<IContentProps>`
    padding: ${({ $size }) => dimensions[$size].padding};
`;
