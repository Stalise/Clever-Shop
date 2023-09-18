import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 2px solid var(--grey);
`;

export const Top = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    span {
        ${fontSpartan('l', '400')}

        margin-right: 20px;
        letter-spacing: 1.5px;
        white-space: nowrap;
        text-transform: uppercase;
    }

    div {
        width: 100%;
        height: 2px;
        background-color: var(--grey);
    }
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    div {
        padding: 7px;
    }
`;
