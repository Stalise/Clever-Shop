import Link from 'next/link';

import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 585px;
`;

export const StyledLink = styled(Link)`
    ${fontSpartan('l', '300')}

    color: var(--dark);
    transition: 100ms;

    &:hover {
        transform: scale(1.1);
    }
`;
