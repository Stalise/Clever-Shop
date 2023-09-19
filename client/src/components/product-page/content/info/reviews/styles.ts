import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    padding-bottom: 30px;
    border-bottom: 2px solid var(--grey);
`;

export const Title = styled.span`
    ${fontSpartan('l', '400')}

    display: inline-block;
    margin-bottom: 30px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const RatingContainer = styled.div`
    display: flex;
    align-items: center;

    span {
        ${fontSpartan('m', '300')}

        display: block;
        margin-left: 7px;
        letter-spacing: 0.6px;
    }
`;

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    transition: 300ms;

    &:hover {
        transform: scale(0.9);
    }

    span {
        ${fontSpartan('l', '300')}

        margin-left: 5px;
        padding-top: 3px;
        color: var(--dark-grey);
    }
`;

export const Content = styled.div`
    margin-top: 35px;

    & > div {
        &:not(:last-child) {
            margin-bottom: 35px;
        }
    }
`;
