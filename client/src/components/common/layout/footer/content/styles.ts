import Link from 'next/link';

import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    padding: 40px 15px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1110px;
    margin: 0 auto;
`;

export const List = styled.ul``;

export const Item = styled.li`
    &:not(:last-child) {
        margin-bottom: 15px;
    }
`;

export const InfoItem = styled(Item)`
    display: flex;
`;

export const Title = styled.span`
    ${fontSpartan('l', '600')}

    letter-spacing: 0.6px;
    text-transform: uppercase;
`;

export const Text = styled.span`
    ${fontSpartan('l', '300')}

    margin-left: 8px;
    padding-top: 1px;
`;

export const StyledLink = styled(Link)`
    ${fontSpartan('l', '300')}

    color: var(--dark-08);
    transition: 300ms;

    &:hover {
        color: var(--dark);
    }
`;

export const Number = styled.a`
    color: var(--dark);
    transition: 300ms;

    &:hover {
        transform: scale(0.95);
    }
`;
