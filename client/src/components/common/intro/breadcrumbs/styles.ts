import Link from 'next/link';

import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    margin-right: 100px;
    overflow-x: auto;
`;

export const List = styled.ul`
    display: flex;
    white-space: nowrap;
    text-align: center;

    span {
        color: var(--dark);
        text-transform: capitalize;
    }
`;

export const StyledLink = styled(Link)`
    ${fontSpartan('m', '300')}

    color: var(--dark-grey);

    em {
        font-style: normal;
    }

    &:hover {
        color: var(--dark);

        em {
            color: var(--dark-grey);
        }
    }
`;
