import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 480px;
    color: #fff;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`;

export const Text = styled.span`
    margin-left: 5px;
    color: var(--grey);
    font-size: var(--typography-spartan-size-s);
    line-height: var(--typography-spartan-height-xs);
    opacity: 0.8;
`;

export const Number = styled.a`
    display: flex;
    align-items: center;
    color: var(--grey);
    transition: 0.3s;

    &:hover {
        transform: scale(0.95);
    }
`;
