import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    margin-bottom: 35px;
    padding: 0 15px;
    background-color: var(--light-grey);
`;

export const Container = styled.div`
    max-width: 1110px;
    margin: 0 auto;
`;

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 0;
`;

export const Text = styled.h1`
    ${fontSpartan('3xl')}

    padding: 20px 0;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
`;

export const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 0;
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

export const Info = styled.div`
    ul {
        display: flex;

        li {
            &:not(:last-child) {
                margin-right: 15px;
            }

            span {
                display: inline-block;
                margin-right: 3px;
                color: var(--dark-grey);
            }

            b {
                ${fontSpartan('m', '500')}
            }
        }
    }
`;
