import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 480px;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Text = styled.span`
    ${fontSpartan('s')}

    margin-left: 5px;
    color: var(--grey);
    opacity: 0.8;
`;

export const Number = styled.a`
    display: flex;
    align-items: center;
    color: var(--grey);
    transition: 300s;

    &:hover {
        transform: scale(0.95);
    }
`;
