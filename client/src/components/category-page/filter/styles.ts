import styled from 'styled-components';

import { fontSpartan } from 'assets/styles/mixins-styles';

interface IProps {
    $isOpenFilter: boolean;
}

export const Wrapper = styled.div<IProps>`
    margin-bottom: ${({ $isOpenFilter }) => ($isOpenFilter ? '30px' : 0)};
    padding: 0 15px;
`;

export const Container = styled.div`
    max-width: 1110px;
    margin: 0 auto;
`;

export const Content = styled.div<IProps>`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-height: ${({ $isOpenFilter }) => ($isOpenFilter ? '335px' : 0)};
    overflow: hidden;
    background-color: var(--light-grey);
    transition: max-height 300ms;
`;

export const List = styled.div`
    padding: 25px;

    ul {
        max-height: 250px;
        padding-right: 20px;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 3px;
        }

        &::-webkit-scrollbar-track {
            background-color: var(--grey);
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--dark-grey);
        }

        li {
            &:not(:last-child) {
                margin-bottom: 15px;
            }
        }
    }
`;

export const Title = styled.span`
    ${fontSpartan('l', '400')}

    display: inline-block;
    margin-bottom: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
`;

export const Result = styled.div<IProps>`
    margin-top: ${({ $isOpenFilter }) => ($isOpenFilter ? '30px' : 0)};
    margin-bottom: 30px;

    span {
        display: inline-block;

        &:not(:last-child) {
            margin-right: 30px;
        }
    }
`;

export const TextFirst = styled.span`
    ${fontSpartan('xl', '400')}
`;

export const TextAll = styled.span`
    ${fontSpartan('xl', '200')}

    color: var(--dark-grey);
    text-transform: capitalize;
`;
