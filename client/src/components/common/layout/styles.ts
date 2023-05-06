import styled from 'styled-components';
import { flex, font } from 'styles/mixins';

// For example !!!
export const Wrapper = styled.main`
    ${font({ lineHeight: 16, size: 18 })};

    padding: 15px;

    & div {
        ${flex({ alignment: 'center', direction: 'row' })};
    }
`;
