import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    margin-bottom: 30px;
    padding: 0 15px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1110px;
    margin: 0 auto;
`;

export const Filter = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    transition: transform 300ms;

    &:hover {
        transform: scale(0.9);
    }

    span {
        ${fontSpartan('xl')}

        display: inline-block;
        margin-left: 10px;
        padding-top: 2px;
        color: var(--dark-07);
        letter-spacing: 1px;
        text-transform: uppercase;
    }
`;

export const View = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 72px;
`;
