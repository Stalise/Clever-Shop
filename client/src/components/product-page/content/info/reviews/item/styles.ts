import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div``;

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const Info = styled.div`
    display: flex;
`;

export const Fullname = styled.strong`
    ${fontSpartan('xl', '300')}
`;

export const Date = styled.span`
    ${fontSpartan('m', '300')}

    display: inline-block;
    margin-right: 5px;
    color: var(--dark-grey);
    letter-spacing: 0.6px;
`;

export const Text = styled.p`
    ${fontSpartan('xl', '300')}

    color: var(--dark-grey);
`;
