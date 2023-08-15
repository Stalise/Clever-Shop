import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 510px;
`;

export const Field = styled.input`
    ${fontSpartan('l')}

    width: 100%;
    max-width: 400px;
    height: 32px;
    margin-right: 10px;
    padding-top: 3px;
    padding-left: 15px;
    color: var(--light);
    background-color: var(--light-02);
    border: 1px solid transparent;
    transition: border 300ms;

    &:hover {
        border: 1px solid var(--dark-grey);
    }

    &:focus {
        border: 1px solid var(--light);
    }
`;
