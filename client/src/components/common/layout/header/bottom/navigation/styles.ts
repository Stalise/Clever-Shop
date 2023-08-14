import Link from 'next/link';

import styled from 'styled-components';

export const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 585px;
`;

export const StyledLink = styled(Link)`
    color: var(--dark);
    font-weight: 300;
    font-size: var(--typography-spartan-size-l);
    line-height: var(--typography-spartan-height-l);
    transition: 100ms;

    &:hover {
        transform: scale(1.1);
    }
`;
