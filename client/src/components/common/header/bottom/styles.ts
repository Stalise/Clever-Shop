import Link from 'next/link';

import styled from 'styled-components';

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
    color: var(--dark);
    font-weight: 100;
    font-size: var(--typography-spartan-size-2xl);
    line-height: var(--typography-spartan-height-2xl);
`;

export const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 170px;
`;
