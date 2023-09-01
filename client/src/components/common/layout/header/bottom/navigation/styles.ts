import Link from 'next/link';

import styled, { css } from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.nav`
    width: 100%;
    max-width: 585px;

    ul {
        display: flex;
        justify-content: space-between;
    }
`;

export const StyledLink = styled(Link)<{ $selected: boolean }>`
    ${fontSpartan('l', '300')}

    display: inline-block;
    color: var(--dark);
    transition: 100ms;

    &:hover {
        transform: scale(1.1);
    }

    ${({ $selected }) =>
        $selected &&
        css`
            ${fontSpartan('l', '400')}

            pointer-events: none;
        `}
`;
