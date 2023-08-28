import Link from 'next/link';

import { styled } from 'styled-components';

export const Wrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 85px;
`;

export const StyledLink = styled(Link)`
    transition: 300ms;

    &:hover {
        transform: scale(0.9);
    }
`;
