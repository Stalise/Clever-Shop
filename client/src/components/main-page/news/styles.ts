import Image from 'next/image';

import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.section`
    padding: 95px 15px;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1110px;
    margin: 0 auto;
`;

export const Item = styled.div`
    box-sizing: padding-box;
    width: 50%;

    &:nth-child(1) {
        padding-right: 15px;
    }

    &:nth-child(2) {
        padding-left: 15px;
    }
`;

export const Content = styled.div`
    position: relative;

    div {
        position: absolute;
        top: 50%;
        left: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: max-content;
        max-width: 80%;
        padding: 16px 24px;
        background-color: var(--light);
        border-radius: 5px;
        transform: translate(-50%, -50%);

        span {
            text-align: center;
            text-transform: uppercase;

            &:nth-child(1) {
                ${fontSpartan('m', '400')}

                margin-bottom: 10px;
                color: var(--dark-grey);
                letter-spacing: 0.6px;
            }

            &:nth-child(2) {
                ${fontSpartan('2xl', '500')}

                letter-spacing: 1.2px;
            }

            em {
                ${fontSpartan('2xl', '500')}

                color: var(--pink);
                font-style: normal;
                letter-spacing: 1.2px;
            }
        }
    }
`;

export const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
