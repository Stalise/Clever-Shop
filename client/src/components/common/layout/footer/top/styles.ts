import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    height: 55px;
    padding: 0 15px;
    background-color: var(--dark);
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1110px;
    height: 100%;
    margin: 0 auto;
`;

export const Text = styled.span`
    ${fontSpartan('l')}

    color: var(--light);
    text-transform: uppercase;
`;
