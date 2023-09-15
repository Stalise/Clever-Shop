import Link from 'next/link';

import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    transition: 300ms;

    &:hover {
        transform: scale(0.9);
    }

    span {
        ${fontSpartan('l')}

        display: block;
        margin-left: 5px;
        padding-top: 3px;
        color: var(--dark-grey);
        text-transform: capitalize;
    }
`;

export const Content = styled.div`
    max-width: 200px;

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        li {
            padding: 5px;
        }
    }
`;

export const StyledLink = styled(Link)`
    ${fontSpartan('l')}

    color: var(--dark);
    transition: 300ms;

    &:hover {
        color: var(--dark-grey);
    }
`;
