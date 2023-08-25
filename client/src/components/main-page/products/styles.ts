import Link from 'next/link';

import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.section`
    padding: 95px 15px 0;
`;

export const Container = styled.div`
    max-width: 1110px;
    margin: 0 auto;
`;

export const StyledLink = styled(Link)`
    ${fontSpartan('l', '300')}

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;
    color: var(--dark);
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: var(--light-grey);
    transition: 300ms;

    &:hover {
        background-color: var(--grey);
    }
`;
