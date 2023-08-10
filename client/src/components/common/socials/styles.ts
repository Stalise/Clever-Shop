import { styled } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 85px;
`;

export const Button = styled.button`
    background-color: transparent;
    transition: 0.3s;

    &:hover {
        transform: scale(0.9);
    }
`;