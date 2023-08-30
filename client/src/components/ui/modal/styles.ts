import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isShow: boolean }>`
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

    ${({ isShow }) =>
        isShow &&
        css`
            opacity: 1;
        `}
`;
