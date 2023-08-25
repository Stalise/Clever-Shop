import Link from 'next/link';

import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    height: 66px;
    padding: 0 15px;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1110px;
    height: 100%;
    margin: 0 auto;
`;

export const Logo = styled(Link)`
    ${fontSpartan('2xl', '100')}

    color: var(--dark);
`;

export const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 170px;
`;
