import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 2px solid var(--grey);

    span {
        display: block;
    }
`;

export const Title = styled.span`
    ${fontSpartan('l', '400')}

    margin-bottom: 10px;
    color: var(--dark-grey);
    letter-spacing: 1.5px;
    text-transform: uppercase;
`;

export const Text = styled.span`
    ${fontSpartan('xl', '300')}
`;
