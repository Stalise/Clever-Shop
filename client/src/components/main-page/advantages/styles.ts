import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.section`
    padding: 30px 15px;
    border-bottom: 2px solid var(--light-grey);
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1110px;
    margin: 0 auto;
`;

export const Item = styled.div`
    display: flex;
    max-width: 345px;

    &:not(:last-child) {
        margin-right: 30px;
    }

    svg {
        transition: 300ms;
    }

    &:hover {
        svg {
            transform: translateY(-5px);
        }

        div {
            transform: translateY(5px);
        }
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 5px;
    padding: 3px 0;
    transition: 300ms;
`;

export const Title = styled.span`
    ${fontSpartan('l', '400')}

    letter-spacing: 0.06em;
    text-transform: uppercase;
`;

export const Text = styled.span`
    ${fontSpartan('l', '200')}
`;
