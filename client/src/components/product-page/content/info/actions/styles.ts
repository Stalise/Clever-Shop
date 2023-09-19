import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 2px solid var(--grey);

    span {
        ${fontSpartan('2xl', '500')}
    }

    & > * {
        &:not(:last-child) {
            margin-right: 25px;
        }
    }
`;
