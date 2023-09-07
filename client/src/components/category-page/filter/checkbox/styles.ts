import styled, { css } from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: transform 100ms;

    input {
        display: none;
    }

    &:hover {
        transform: scale(0.95);
    }
`;

export const Field = styled.div<{ $isChecked: boolean }>`
    width: 17px;
    height: 17px;
    margin-right: 10px;
    background: ${({ $isChecked }) =>
        $isChecked
            ? css`
    radial-gradient(
        circle,
        var(--dark) 0,
        var(--dark) 30%,
        var(--light) 30%,
        var(--light) 100%
    )
    `
            : 'none'};
    background-color: var(--light);
    border: ${({ $isChecked }) =>
        `1px solid var(${$isChecked ? '--dark' : '--dark-grey'})`};
    border-radius: 3px;
`;

export const Color = styled.div<{ $color: string }>`
    width: 17px;
    height: 17px;
    margin-right: 10px;
    background-color: ${({ $color }) => $color.replace(/\s/g, '')};
    border-radius: 50%;
`;

export const Text = styled.span`
    ${fontSpartan('l', '300')}

    padding-top: 4px;
    text-transform: capitalize;
`;
