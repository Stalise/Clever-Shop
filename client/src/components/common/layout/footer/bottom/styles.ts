import Link from 'next/link';

import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    padding: 0 15px;
    background-color: var(--light-grey);
`;

export const Container = styled.div`
    ${fontSpartan('s', '300')}

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1110px;
    margin: 0 auto;
    color: var(--dark-grey);
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    div {
        padding: 12px;
    }
`;

export const StyledLink = styled(Link)`
    color: var(--dark-grey);
    transition: 300ms;

    &:hover {
        color: var(--dark);
    }
`;
