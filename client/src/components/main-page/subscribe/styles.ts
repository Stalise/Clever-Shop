import Image from 'next/image';

import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

export const Wrapper = styled.div`
    margin-bottom: 100px;
    padding: 60px 15px;
    overflow: hidden;
    background: linear-gradient(180deg, #f4f2f2 0%, #dcdcdc 100%);
`;

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 530px;
    margin: 0 auto;
    padding: 95px;
    text-align: center;
    text-transform: uppercase;
    background-color: var(--light);
    border-radius: 4px;
`;

export const Title = styled.span`
    ${fontSpartan('m', '400')}

    margin-bottom: 15px;
    color: var(--dark-grey);
    letter-spacing: 0.6px;
`;

export const Text = styled.span`
    ${fontSpartan('4xl', '400')}

    margin-bottom: 30px;
    letter-spacing: 1.2px;

    em {
        ${fontSpartan('4xl', '500')}

        color: var(--pink);
        font-style: normal;
        line-height: 45px;
        letter-spacing: 1.2px;
    }
`;

export const Field = styled.input`
    ${fontSpartan('xl')}

    width: 100%;
    max-width: 340px;
    height: 60px;
    margin-bottom: 25px;
    letter-spacing: 0.6px;
    text-align: center;
    background-color: var(--light-grey);
    border: 2px solid transparent;
    transition: border 300ms;

    &::placeholder {
        color: var(--dark-grey);
        ${fontSpartan('xl', '300')}
    }

    &:hover {
        border: 2px solid var(--pink);
    }

    &:focus {
        border: 2px solid var(--dark);
    }
`;

export const WomanImage = styled(Image)`
    position: absolute;
    top: -17px;
    left: -250px;
    width: 311px;
    height: 584px;
`;

export const ManImage = styled(Image)`
    position: absolute;
    top: -20px;
    right: -203px;
    width: 219px;
    height: 524px;
`;
