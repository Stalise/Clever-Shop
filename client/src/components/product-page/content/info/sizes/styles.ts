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

export const Content = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

export const Button = styled.button<{ $selected: boolean }>`
    width: 40px;
    height: 40px;
    background-color: ${({ $selected }) =>
        $selected ? 'var(--light)' : 'var(--light-grey)'};
    border: ${({ $selected }) =>
        css`2px solid ${$selected ? 'var(--dark)' : 'var(--light-grey)'}`};
    transition: border 300ms;

    &:not(:last-child) {
        margin-right: 15px;
    }
`;
