import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 2px solid var(--grey);
`;

export const Title = styled.span`
    ${fontSpartan('l', '400')}

    display: inline-block;
    margin-bottom: 30px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
`;

export const Content = styled.div`
    em {
        ${fontSpartan('xl', '300')}

        font-style: normal;
        text-transform: capitalize;
    }

    span {
        ${fontSpartan('xl', '300')}

        color: var(--dark-grey);
    }

    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;
